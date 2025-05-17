//db.rent.findOne({});

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
            cleaning_fee: 1,
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
        $merge: {
             into: {
                 db: "airbnb",
                 coll: "rent_price"
             }

        }
    }
])

db.rent_price.findOne({})

db.rent_price.aggregate([
  {
    $match: {
      num_price: { $exists: true }
    }
  },
  {
    $bucket: {
      groupBy: "$num_price",
      boundaries: [0, 50, 100, 150, 200],
      default: "Other",
      output: {
        count: { $sum: 1 },
        names: { $push: "$name" },
        avgPrice: { $avg: "$num_price" }
      }
    }
  }
])


db.rent_price.aggregate([
    {
        $match: {
            num_price: { $exists: 1}
        }
    },
    {
        $bucketAuto: {
            groupBy: '$num_price',
            buckets: 4,
            output:{
                'count': {$sum : 1},
                'avgPrice': {$avg: '$num_price'}
            }
        }
    }
])

// use flightmgmt

db.crew.find({})


