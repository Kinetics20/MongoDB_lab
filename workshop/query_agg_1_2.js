// use airbnb

db.salaries.findOne({})

db.salaries.aggregate([
    {
        $group: {
            _id: {fiscal_year: '$fiscal_year',
            dept: '$dept'
            },
            salaris: {$sum: '$salary'}
        }
    },
    {
        $sort: {
            '_id.fiscal_year': 1
        }
    }
])

db.salaries.aggregate([
    {
        $group: {
            _id: {fiscal_year: '$fiscal_year',
            dept: '$dept'
            },
            salaris: {$sum: '$salary'}
        }
    },
    {
        $sort: {
            '_id.fiscal_year': 1
        }
    },
    {
        $merge: {
            into: {
                db: 'airbnb',
                coll: 'budgets'
            }
        }
    }
])

db.budgets.find({})



db.salaries.insertMany([
  { "_id" : 10001,  name: "Wren", dept: "IT", salary: 100000, fiscal_year: 2019 },
  { "_id" : 10002,  name: "Zebra", dept: "Engineering", salary: 150000, fiscal_year: 2019 },
  { "_id" : 10003,  name: "Alex", dept: "HR", salary: 125000, fiscal_year: 2019 },
  { "_id" : 10004,  name: "Sophie", dept: "IT", salary: 70000, fiscal_year: 2019 },
  { "_id" : 10005,  name: "Steiner", dept: "Finance", salary: 250000, fiscal_year: 2020 },
  { "_id" : 10006,  name: "Joseph", dept: "Engineering", salary: 112000, fiscal_year: 2020 },
  { "_id" : 10007,  name: "Sarah", dept: "HR", salary: 113000, fiscal_year: 2020 },
  { "_id" : 10008,  name: "headcount1", dept: "IT", salary: 150000, fiscal_year: 2021 },
  { "_id" : 10009,  name: "headcount2", dept: "Sales", salary: 100000, fiscal_year: 2021 },
  { "_id" : 100010,  name: "headcount3", dept: "Sales", salary: 80000, fiscal_year: 2021 }
])