const con_data =     {
        "title": "Perl Conference",
        "topics": ["perl", "old", "unix"],
        "ticket_cost": 350,
        'date': '2024-08-13T00:00:00'
    };

con_data.date = new Date(con_data.date)

// console.log(con_data)

db.conferences.insertOne(con_data)

db.conferences.findOne({title: "Perl Conference"})

db.conferences.find({})

db.conferences.createIndex({title: 'text'});

db.conferences.find({$text: {$search: "Perl"}})

db.conferences.find()

db.conferences.find({'ticket_cost': {$eq: -400}})

db.conferences.find({'ticket_cost': -400})

db.conferences.deleteMany({'ticket_cost': -400})

db.conferences.deleteOne({'ticket_cost': {$lt: 0}})

db.conferences.deleteMany({'ticket_cost': {$lt: 0}})

db.sessions.deleteMany({
    $and: [
        {room: 'Barracuda'},
        {topic: 'javascript'}
    ]
})

db.attendees.find({state: {$regex:/^[A-Z]{0,3}$/, $options: 'i'}})

db.attendees.find({state: {$regex:/^[A-Za-z]{0,3}$/}})

db.attendees.deleteMany({state: {$regex:/^[A-Z]{0,3}$/, $options: 'i'}})

db.conferences.deleteMany({topics:{$in: ['old', 'unix']}})

db.conferences.find({topics:{$all: ['old', 'unix']}})

db.conferences.find({})

db.getCollectionNames()

db.sessions.find()

db.conferences.find()

db.conferences.findOne({title: 'MongoDB Conference'})

db.conferences.updateOne(
    {title: 'MongoDB Conference'},
    {$set: {ticket_cost: 1000}}
)

db.conferences.updateOne(
    {title: 'MongoDB Conference'},
    {$set: {attendees: 300}}
)

db.conferences.updateOne(
    {title: 'MongoDB Conference'},
    {$inc: {attendees: 10}}
)

db.conferences.updateOne(
    {title: 'MongoDB Conference'},
    {$unset: {attendees: ''}}
)





