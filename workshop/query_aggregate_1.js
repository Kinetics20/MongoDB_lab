//show dbs

// use airbnb
//
// show collections

db.rent.findOne({})

db.rent.findOne({}, {
    name: 1,
    neighbourhood_cleansed: 1,
    host_response_rate: 1,
    price: 1,
    cleaning_fee: 1
})


db.rent.aggregate([
    {
        $project: {
            price: {$toDouble: '$price'}
        }
    }

])


db.rent.aggregate([
    {
        $match: {
            $and: [
                { price: { $exists: true } },
                { price: { $ne: "" } },
                { cleaning_fee: { $exists: true } },
                { cleaning_fee: { $ne: "" } },
            ]
        }
    },
    {
        $project: {
            name: 1,
            neighborhood: "$neighbourhood_cleansed",

            num_price: {
                $toDouble: {
                    $reduce: {
                        input: { $split: [{ $substr: ["$price", 1, -1] }, ','] },
                        initialValue: '',
                        in: {
                            $concat: ['$$value', '$$this']
                        }
                    }
                }
            },
            num_clan_fee: {
                $toDouble: {
                    $reduce: {
                        input: { $split: [{ $substr: ["$cleaning_fee", 1, -1] }, ','] },
                        initialValue: '',
                        in: {
                            $concat: ['$$value', '$$this']
                        }
                    }
                }
            }
        }
    },
    {
        $addFields: {
            avarage_price: { $sum: [{$multiply: ['$num_price', 7]}, '$num_clan_fee' ]}
        }
    },
    {
        $match: {
            $and: [
                {num_price: { $gt: 100 }},
                {num_price: {$lt: 200}},
                {num_clan_fee: { $gt: 100 }},
            ]
        }
    },
    {
        $sort: {
            num_price: -1,
            num_clean_fee: -1
        }
    },
    {
        $limit: 10
    }
]).explain('executionStats')

