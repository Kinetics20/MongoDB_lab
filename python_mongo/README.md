

# 🗃️ MongoDB Operations with PyMongo

This project demonstrates how to perform basic operations on a MongoDB database using [PyMongo](https://pymongo.readthedocs.io/en/stable/). All code is located in the `main.py` file.

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

## 🧰 Requirements

* Python 3.10+
* MongoDB running locally on `mongodb://localhost:27017`
* PyMongo

> All dependencies will be automatically installed via `uv sync`.

## 📂 Structure

```
├── main.py
├── uv.toml
└── README.md
```

## 📝 Notes

* Ensure MongoDB is running before executing the script.
* Sample employee data is inserted and manipulated as part of the demonstration.


