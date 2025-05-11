db.flights.find({
    departureDate: {
        $gte: ISODate('2020-02-20'),
        $lt: ISODate('2020-02-21')
    }
});


db.flights.find({
    $and: [
        {type: "Internal"},
        {duration: { $lt: 120}}
    ]
}, {
    type: 1,
    duration: 1,
    "departure.city": 1,
    "destination.city": 1
});





db.flights.find({
 $or: [
     { "departure.country": "Germany"},
     { "destination.country": "Germany"}
 ]
}, {
    "departure.city": 1,
    "destination.city": 1,
    _id: 0
})





db.aircraft.find({
    $and:[
        {minRunwayLength: {$gte: 3000}},
        { $or: [ {capacity: {$gt: 200}}, {range: {$gt: 6500}}]}
    ]
})



db.flights.find({
    aircraft: {$exists: true, $type: 'string'}
}, {aircraftCode: 1, _id: 0})



db.crew.find({
  skills: {$all: ['technical', 'management']}
})


db.crew.find({
    skills: {$size: 2}
})


db.crew.find({
    skills: {$size: 2}
})

db.crew.findOne()

db.flights.find({
    'crew.nationality': 'Germany'
}, {'crew.$': 1})

db.flights.find({
    crew: { $size:0}
}, {crew: 1})


db.flights.find({
    'crew.position': { $ne: 'Captain'}
}, {'crew.position': 1})


db.flights.find({}, {crew: {$elemMatch: {position: 'Captain'}}})


db.flights.find({
    crew: {$elemMatch: {position: 'Captain', hoursSlept:{ $lt: 6}}}

    }, {crew: 1})


db.flights.find({
    crew: {$elemMatch: {position: 'Captain', hoursSlept:{ $lt: 6}}}

    }, {crew: { $elemMatch: { position: 'Captain'} }})


db.flights.find({
    'crew.nationality': 'Germany',
    'departure.country': 'Germany'
}, {'crew': 1, 'departure.country': 1})


db.crew.find({
    skills: 'management', skills: {$ne: 'technical'}
})


db.crew.find({
    $and: [
        {skills: 'management'},
        {skills: {$ne: 'technical'}}
    ]

})