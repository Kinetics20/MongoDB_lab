// use airbnb

// show dbs

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
            price: {$toDecimal: "$price"},
        }
    }
])


db.rent.aggregate([
    {
        $project: {
            price: {$substr: ["$price", 1, -1]}
        }
    }
])


db.rent.aggregate([
    {
        $project: {
            price: {
                $split: [{$substr: ["$price", 1, -1]}, ',']

            }
        }
    }
])


db.rent.aggregate([
    {
        $match: {
            price: '$2,000.00'
        }
    },
    {
        $project: {
            price: {
                $reduce: {
                    input: {$split: [{$substr: ["$price", 1, -1]}, ',']},
                    initialValue: '',
                    in: {
                        $concat: ["$$value", '$$this']
                    }
                }
            }
        }
    }
])


db.rent.aggregate([
    {
        $match: {
            price: '$2,000.00'
        }
    },
    {
        $project: {
            num_price: {
                $toDouble: {
                    $reduce: {
                        input: {$split: [{$substr: ["$price", 1, -1]}, ',']},
                        initialValue: '',
                        in: {
                            $concat: ["$$value", '$$this']
                        }
                    }
                }
            }
        }
    }
])



db.rent.aggregate([
    {
        $match: {
            $and: [
                {price: {$exists: true}},
                {price: {$ne: ''}},
                {cleaning_fee: {$exists: true}},
                {cleaning_fee: {$ne: ''}},
            ]
        }
    },
    {
        $project: {
            name: 1,
            neighbourhood: '$neighbourhood_cleansed',
            num_price: {
                $toDouble: {
                    $reduce: {
                        input: {$split: [{$substr: ["$price", 1, -1]}, ',']},
                        initialValue: '',
                        in: {
                            $concat: ["$$value", '$$this']
                        }
                    }
                }
            },
            num_clean_fee: {
                $toDouble: {
                    $reduce: {
                        input: {$split: [{$substr: ["$cleaning_fee", 1, -1]}, ',']},
                        initialValue: '',
                        in: {
                            $concat: ["$$value", '$$this']
                        }
                    }
                }
            }
        }
    },
    {
        $addFields: {
            average_price: { $sum: [ {$multiply: [ '$num_price', 7]}, '$num_clean_fee' ]}
        }
    },
    {
        $match: {
            $and: [
                { num_price: {$gt: 100}},
                { num_price: {$lt: 200}},
                { num_clean_fee: {$lt: 100}}
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
])