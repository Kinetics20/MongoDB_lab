// show dbs
//
// show collections

db.flights.find()

db.flights.find({}, {'crew.name': 1, 'destination.code': 1})

db.flights.find({}, {'crew.position': 1, 'destination.city': 1})

db.flights.find({}, {'crew.position': 1, 'destination.city': 1, 'destination.code': 1, _id: 0})

db.flights.find({}, {'crew.position': 1, 'destination.city': 1, 'destination.code': 1, _id: 0}).limit(3)

db.flights.find({}, {
    duration: 1,
    'crew.position': 1,
    'destination.city': 1,
    'destination.code': 1,
    _id: 0
}).sort({duration: 1})

db.flights.find({}, {
    duration: 1,
    'crew.position': 1,
    'destination.city': 1,
    'destination.code': 1,
    _id: 0
}).sort({duration: -1})

db.aircraft.find({}, {model: 1})

db.aircraft.find({}, {model: 1, _id: 0})

db.aircraft.find({}, {model: 1, _id: 0}).limit(3)

db.aircraft.find({model: 'Boeing 737-900'})

db.aircraft.find({model: {$eq: 'ATR 72'}})

db.aircraft.find({range: {$eq: 5600}})

db.aircraft.find({range: {$gte: 5600}})

db.aircraft.find({range: {$gt: 5600}})

db.aircraft.find({
    _id: ObjectId('6821f9324d51b7df0530d867')

})

db.aircraft.find({range: {$ne: 5600}})

db.aircraft.find({range: {$lt: 5600}}).sort({range: -1})

db.aircraft.find({capacity: {$lte: 150}})

db.aircraft.find({capacity: {$lt: 200}})

db.aircraft.find({model: {$in: ['Airbus A350', 'Boeing 747']}})

db.aircraft.find({model: {$nin: ['Airbus A350', 'Boeing 747']}})

db.aircraft.find({model: {$regex: 'Boeing'}}).sort({range: 1})

db.aircraft.find({model: {$regex: 'Boeing', $options: 'i'}})


db.aircraft.find({model: {$regex: 'Airbus'}}).sort({model: -1})

db.aircraft.find({model: {$in: [/^Boeing/]}})

db.flights.findOne()

db.flights.createIndex({'departure.location': '2dsphere'})

db.flights.find({
    'departure.location': {
        $near: {
            $geometry: {type: 'Point', coordinates: [2.235, 48.85]},
            $maxDistance: 10000
        }
    }
})

db.flights.find({departureDate: {$gt: ISODate('2020-02-20')}})

db.flights.find({departureDate: {$gte: ISODate('2020-02-19'), $lt: ISODate('2020-02-21')}})


db.flights.find({
    $and: [
        {type: 'Internal'},
        {duration: {$lt: 120}}
    ]
}, {
    type: 1,
    duration: 1,
    'departure.city': 1,
    'destination.city': 1
})


db.flights.find({
    $or: [
        {'departure.country': 'Germany'},
        {'destination.country': 'Germany'}
    ]
}, {
    'departure.city': 1,
    'destination.city': 1,
    _id: 0
})


db.aircraft.find({
    $and: [{capacity: {$gt: 100}},
        {range: {$gt: 4000}}

    ]
}, {'model': 1, _id: 0})

db.aircraft.find({
    $and: [
        {minRunwayLength: {$gte: 3000}},
        {$or: [
                {capacity: {$gt:200}},
                {range: {$gt: 6500}}
            ]}
    ]
})

db.flights.find({},{
    aircraftCode: 1, _id: 0, crew: 1
})

db.flights.findOne()

db.flights.find({
    aircraftCode: { $exists: true, $type: 'string'}
}, {
    aircraftCode: 1, _id: 0
})

db.flights.find({
    aircraftCode: { $exists: true}
}, {
    aircraftCode: 1, _id: 0
})

db.flights.find({
    aircraftCode: null
}, {
    aircraftCode: 1
})

db.flights.find({
    aircraftCode: {$exists: true, $type: 'null'}
}, {
    aircraftCode: 1
})

db.crew.findOne()

db.crew.find({
    skills: {$all: ['technical', 'management']}
})


db.crew.find({
    skills: { $size: 2}
})

db.flights.find({
    'crew.nationality': 'France'
}, {
    crew: 1
})

db.flights.find({
    $and: [{
        'crew.nationality': 'France',
        'crew.nationality': 'Germany'
    }]
})

db.flights.find({
    'crew.nationality': {$in: ['France', 'Germany']}
}, {'crew.$': 1})


db.flights.find({
    crew:[]
})

db.flights.find({
    crew: {$size: 0}
})

db.flights.find({
    'crew.position': { $ne: 'Captain'}
}, {
    crew: 1, departureDate: 1, departure: 1, destination: 1
})

db.flights.find({}, {crew: {$elemMatch: {position: 'Captain'}}}
)

db.flights.find({
    crew: {$elemMatch: {position: 'Captain', hoursSlept: {$lt: 6}}}
})


db.flights.find({
    crew: {$elemMatch: {position: 'Captain', hoursSlept: {$lt: 6}}}
}, {
    crew: {elemMatch: {position: 'Captain'}},
})

db.flights.find({
    'crew.nationality': 'Germany',
    'departure.country': 'Germany'
})

db.crew.find({
    skills: 'management', skills: {$ne: 'technical'}
})

db.crew.find({
    $and:
    [
        {skills: 'management'},
        {skills: 'technical'}
    ]
})

db.crew.find({
    $and:
    [
        {skills: 'management'},
        {skills: {$ne: 'engineering'}}
    ]
})




