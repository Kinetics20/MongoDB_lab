// const conference_data = {
//         "title": "MongoDB Conference 2",
//         "topics": ["javascript", "mongodb", "data"],
//         "ticket_cost": 500,
//         'date': '2024-08-13T00:00:00',
//         '_id': 1
//     };
//
//
// conference_data.date = new Date(conference_data.date)
//
// console.log(conference_data)

// db.conferences.insertOne(conference_data)

// db.conferences.createIndex({title: "text"});
// db.conferences.find({
//
//             $text: {
//                 $search: "\"MongoDB Conference\""
//
//         }})

// const conferences = [
//     {
//         "title": "Wodcon",
//         "topics": ["javascript", "mongodb", "data"],
//         "ticket_cost": 500
//     },
//     {
//         "title": "Angular Conference",
//         "topics": ["typescript", "angular", "web"]
//         ,
//         "ticket_cost": -450
//     },
//     {
//         "title": "Django Conference",
//         "topics": ["python", "django", "web"]
//         ,
//         "ticket_cost": -400
//     }
// ];
//
// console.log(db.conferences.insertMany(conferences));
//
// db.conferences.find({title: "Wodcon"});

// db.conferences.find();

// db.conferences.deleteMany({'ticket_cost': {$lt: 0}});

// db.sessions.deleteMany({
//     $and: [
//         {room: 'Barracuda'},
//         {topic: 'javascript'}
//
//     ]
// });

// db.attendees.deleteMany({state: {$regex: /^[A-Z]{0,3}$/, $options: 'i'}})


// db.conferences.deleteMany({
//     topics: {$in: ['old', 'unix']}
// });


// db.conferences.find();

// db.conferences.drop();

// db.sessions.deleteMany({});
db.conferences.find();

// db.conferences.updateOne(
//     {title: "MongoDB Conference"},
//     {$set: {'ticket_cost': 550}}
// )

db.conferences.updateOne(
    {title: "MongoDB Conference"},
    {$set: {'attendees': 20}}
);

db.conferences.updateOne(
    {title: "MongoDB Conference"},
    {$inc: {'attendees': -1}}
);


db.conferences.updateOne(
    {title: "MongoDB Conference"},
    {$unset: {'attendees': ''}}
);

db.conference_ratings.find();

db.conference_ratings.updateOne(
    {},
    {$pull: {'ratings': {$lte: 2}}}
);


db.conference_ratings.updateOne(
    {'id': 'mongoconf'},
    {$push: {'ratings': 10}}
);

db.conference_ratings.updateOne(
    {'id': 'mongoconf'},
    {$push: {'ratings': {$each: [1, 1, 1, 1, 1]}}}
)

db.conference_ratings.find(
    {
        attendees: {$lt: 350}
    }
);

db.conference_ratings.updateMany(
    {
        attendees: {$lt: 350}
    },
    {
        $set: {'ticket_cost': 300}
    }
);

db.conference_ratings.find()

db.conference_ratings.updateMany(
    {
        attendees: {$lt: 300}
    },
    {
        $set: {'ticket_cost': 200}
    },
    {
        'upsert': true
    }
);

db.conference_ratings.updateOne({
    '_id': 'wodkon'
}, {
    $set: {ticket_cost: 500},
    $inc: {attendees: 25}
}, {
    'upsert': true

});

db.conference_ratings.updateOne({
    '_id': 'wodkon_2'
}, {
    $set: {ticket_cost: 1800},
    $inc: {attendees: 25},
    $setOnInsert: {title: 'Wodkon_3'}
}, {
    'upsert': true

});