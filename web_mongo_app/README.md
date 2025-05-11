
# 🌐 Web Mongo App — FastAPI + MongoDB

This is a simple web API built using [FastAPI](https://fastapi.tiangolo.com/) and [MongoDB](https://www.mongodb.com/). It allows users to manage conference data through a RESTful interface.

## ⚙️ Features

* 🔍 Retrieve all conferences
* 🧾 Fetch a single conference by ID
* ➕ Create a new conference
* ❌ Delete a conference by ID
* 🎯 Data validation with Pydantic
* ⚡ Asynchronous MongoDB access with Motor

## 📁 Project Structure

```
web_mongo_app/
├── server.py
├── .env
├── uv.toml
└── README.md
```

## 📦 Required Libraries

This app uses the following Python packages:

* `fastapi`
* `motor` (async MongoDB driver)
* `pydantic`
* `python-dotenv`
* `uvicorn` (ASGI server)

Install everything with:

```bash
uv sync
```

> If you previously had another virtual environment activated, make sure to reset it:

```bash
deactivate
source .venv/bin/activate
```

## 🔐 .env File

Create a `.env` file in the same directory with the following content:

```env
MONGO_URI="mongodb://localhost:27017"
```

## 🚀 Running the App

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


