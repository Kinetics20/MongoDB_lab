// use flightmgmt

db.crew.find({})

db.crew.aggregate([
    {$unwind: '$skills'},
    {$sortByCount: '$skills'}
    ])

db.crew.find({})
db.aircraft.find({})
db.flights.find({})

db.crew.updateOne({
    name: "Francois Picard"
}, {
    $set: {name: "Pierre Cotard"}
})

// $lookup

db.flights.aggregate([
    {
        $match: {aircraftCode: {$exists: 1}}
    },
    {
        $lookup: {
            from: 'aircraft',
            localField: 'aircraftCode',
            foreignField: 'code',
            as: 'flights_aircraft'
        }
    },
    {
        $unwind: '$flights_aircraft'
    }
])

db.flights.aggregate([
    {
        $unwind: "$crew"
    },
    {
        $lookup: {
            from: "crew",
            localField: "crew.name",
            foreignField: "name",
            as: "crewDetails"
        }
    },
    {
        $unwind: "$crewDetails"
    },
    {
        $project: {
            aircraftCode: 1,
            crew: {
                name: 1,
                position: 1,
                nationality: 1,
                hoursSlept: 1,
                address: "$crewDetails.address"
            }
        }
    },
    {
        $group: {
            _id: "$_id",
            crew: { $push: "$crew"}
        }
    },
    {
        $project: {
            _id: 0,
            aircraftCode: 1,
            crew: 1
        }
    }

])
