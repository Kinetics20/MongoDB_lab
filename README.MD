

# 📘 MongoDB\_lab

## 🧩 Project Description

**MongoDB\_lab** is a collection of practical exercises demonstrating how to use **MongoDB** with **Node.js** (JavaScript) and **Python** applications.
The project is divided into thematic directories and covers data import, manipulation, and simple apps that interact with MongoDB.

## 📁 Project Structure

```
MongoDB_lab/
│
├── sources/                     # Raw data for MongoDB databases
│   ├── flightmgmt/             # Data for the 'flightmgmt' database
│   │   ├── aircraft.json
│   │   ├── crew.json
│   │   └── flights.json
│   └── conference/             # Data for the 'conference' database
│       ├── attendees.json
│       ├── conference_ratings.json
│       ├── conferences.json
│       └── sessions.json
│
├── workshop/                   # JS scripts to practice MongoDB queries
│   ├── query_samples.js        # Queries for the 'flightmgmt' database
│   └── query_samples_2.js      # Queries for the 'conference' database
│
├── python_mongo/               # Python scripts for MongoDB and SQLite
│   └── main.py                 # Creates an SQLite database (employee.db)
│
├── web_mongo_app/              # Web app using Node.js and Express
│   ├── app.js
│   ├── views/
│   └── routes/
│
└── README.md                   # This file
```

## 🧰 Installing MongoDB on Ubuntu

Run the following commands in the terminal:

```bash
curl -fsSL https://pgp.mongodb.com/server-8.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor

echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list > /dev/null

sudo apt update
sudo apt install -y mongodb-org

sudo systemctl start mongod
sudo systemctl status mongod
```

## 🗃️ Importing Data into MongoDB

### 1. Open Mongo shell:

```bash
mongosh
```

### 2. Import data into the `flightmgmt` database:

Navigate to `sources/` and run:

```bash
mongoimport --db flightmgmt --collection aircraft --file aircraft.json --drop
mongoimport --db flightmgmt --collection flights --file flights.json --drop
mongoimport --db flightmgmt --collection crew --file crew.json --drop
```

### 3. Import data into the `conference` database:

Navigate to `sources/conference/` and run:

```bash
mongoimport --db conference -c attendees --file attendees.json --jsonArray --drop
mongoimport --db conference -c conferences --file conferences.json --jsonArray --drop
mongoimport --db conference -c sessions --file sessions.json --jsonArray --drop
mongoimport --db conference -c conference_ratings --file conference_ratings.json --jsonArray --drop
```

## 🧪 MongoDB Queries

### 🔍 File: `workshop/query_samples.js` (flightmgmt)

Includes:

* Filtering by date (`ISODate`)
* Logical operations: `$and`, `$or`
* Nested documents and arrays (`crew`)
* Filtering using `$size`, `$elemMatch`, `$all`
* Field projection without `_id`

### 🔍 File: `workshop/query_samples_2.js` (conference)

Includes:

* `insertOne`, `insertMany`
* Creating a text index (`createIndex`)
* `updateOne`, `updateMany`, `upsert`, `$inc`, `$unset`
* Deleting with `$pull`, `$regex`, `deleteMany`
* Dynamic document updates (e.g., `ticket_cost`, `attendees`)

# 🗃️ MongoDB Operations with PyMongo (python_mongo/)

This project demonstrates how to perform basic operations on a MongoDB database using [PyMongo](https://pymongo.readthedocs.io/en/stable/). All code is located in the `python_mongo/main.py` file.

## 🚀 Features

* Connect to MongoDB and list available databases
* Use connection pooling
* Create and access a database and collection
* Insert multiple employee documents
* Query all documents
* Filter by department (e.g., HR)
* Delete specific documents (e.g., first designer)
* Sort and retrieve the most recent document
* Handle exceptions for missing fields
* Find employees earning more than 10,000
* Update missing salary fields
* Remove department info for underpaid employees

## 🧪 Running the Project

This project uses [**uv**](https://lithic.tech/uv/) for dependency management. To install all required dependencies, simply run:

```bash
uv sync
```

Then run the script:

```bash
python main.py
```

# 🌐 Web Mongo App — FastAPI + MongoDB (web_mongo_app/)

This is a simple web API built using [FastAPI](https://fastapi.tiangolo.com/) and [MongoDB](https://www.mongodb.com/). It allows users to manage conference data through a RESTful interface.

## ⚙️ Features

* 🔍 Retrieve all conferences
* 🧾 Fetch a single conference by ID
* ➕ Create a new conference
* ❌ Delete a conference by ID
* 🎯 Data validation with Pydantic
* ⚡ Asynchronous MongoDB access with Motor

## 🚀 Running the App

Create a `.env` file in the same directory with the following content:

```env
MONGO_URI="mongodb://localhost:27017"
```

Launch the server with:

```bash
uvicorn server:app --reload
```

If port 8000 is busy, use an alternative port:

```bash
uvicorn server:app --reload --port 8006
```

## 🧪 API Endpoints

| Method | Endpoint                 | Description               |
| ------ | ------------------------ | ------------------------- |
| GET    | `/conferences`           | Get all conferences       |
| GET    | `/conferences/{conf_id}` | Get one conference by ID  |
| POST   | `/conferences`           | Create a new conference   |
| DELETE | `/conferences/{conf_id}` | Delete a conference by ID |


## 💡 Technologies Used

* 🍃 MongoDB 8.0
* 🟨 Node.js / JavaScript
* 🐍 Python 3.13
* 🗃️ SQLite
* 🌐 Express.js
* 🧾 EJS
* 🖥️ Bash / Terminal

## 🧭 Project Flow

1. Install MongoDB
2. Create the `sources/` directory and prepare data files
3. Import data into MongoDB (`flightmgmt` and `conference`)
4. Write queries in `query_samples.js` (flightmgmt)
5. Write queries in `query_samples_2.js` (conference)
6. Create Python script `main.py` (SQLite database)
7. Build the web application in `web_mongo_app/`

---

👤 **Author:** Piotr Lipiński
🗓 **Date:** May 2025


