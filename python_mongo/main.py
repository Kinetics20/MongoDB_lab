import pymongo

# concet with db and show list dbs
# polacz z db i pokaz liste dbs


client = pymongo.MongoClient("mongodb://localhost:27017/")
databases = client.list_database_names()
print(databases)


# use pooling to connect to db
# uzyj pooling do polaczenia
client = pymongo.MongoClient(
    "mongodb://localhost:27017/",
    maxPoolSize=50,
    minPoolSize=5,
    serverSelectionTimeoutMS=5000,
)


# use and attempt access to collection in MongoDB
# utworz i uzyskaj dostep do kolekcji w MongoDB
db = client['employee_db']
collection = db['employees']

print(db.name)
print(collection.name)


# insert some documents json to mongo
# wstaw wiele dokumentow json do mongo
employees = [
    {'n' : 'Ola', 'age': 25, 'department': 'Software Engineering', 'salary': 15000},
    {'n' : 'Jurek', 'age': 31, 'department': 'Design', 'salary': 7500},
    {'n' : 'Jenny', 'age': 35, 'department': 'HR', 'salary': 3650}
]

db.collection_name.insertMany(employees)
db['employees'].insert_many(employees)
collection.insert_many(employees)


# read data from MongoDB
# odczytaj dane z MongoDB

all_employees = collection.find()
print(all_employees)

for employee in all_employees:
    print(employee)


# find people's data work in HR department
# znajdz dane ludzi pracujacych w HR
hr_employees = collection.find({'department': 'HR'})
for employee in hr_employees:
    print(employee['n'], employee['age'])


# delete first person works as designer
# usun pierwszego designera
result = collection.delete_one({'department': 'Design'})
print(result)


# get first record from mongo
# pobierz pierwszy rekord z mongo
top_employee = collection.find().sort('_id', -1).limit(1)
print(list(top_employee))

# write exception handling during processing employee
# obsluz bledy przy przetwarzaniu pracownika
employees = collection.find()

for employee in employees:
    # print(employee.get('salary', None))
    # print(employee['salary'])
    try:
        print(employee['n'], employee['salary'])
    except KeyError:
        print('Error, salary not found')


# find people who earn more than 10k
# znajdz osoby powyzej 10k


for employee in collection.find({'salary': {'$gt': 10000}}):
    print(employee['n'], employee['salary'])

# add 5k salary to people who don't have salary'
# dodaj 5k osobom, ktore nie maja pola salary

collection.update_many(
    {'salary': {'$exists': False}},
    {'$set': {'salary': 5000}},
)


# delete department with people who earn less than 10k
# usun department z ludzmi ktorzy zarabiaja ponizej 1000

collection.update_many(
    {'salary': {'$lte': 10000}},
    {'$unset': {'department': ''}},
)

for employee in collection.find():
    print(employee)