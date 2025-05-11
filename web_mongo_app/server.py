import os


from fastapi import FastAPI, HTTPException
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field
from bson import ObjectId


load_dotenv()

app= FastAPI()

MONGO_URI = os.getenv('MONGO_URI', "mongodb://localhost:27017")
client = AsyncIOMotorClient(MONGO_URI)
db = client['conference']
collection = db['conferences']

class ConferenceModel(BaseModel):
    id: str | None = Field(alias='_id')
    title: str
    ticket_cost:int
    topics: list[str]

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

@app.get('/conferences', response_model=list[ConferenceModel])
async def get_all_conferences():
    conferences = [{**doc,'_id': str(doc['_id'])} for doc in await collection.find().to_list(length=100)]
    return conferences


@app.get('/conferences/{conf_id}', response_model=ConferenceModel)
async def get_conference(conf_id: str):
    conference = await collection.find_one({'_id': ObjectId(conf_id)})

    if not conference:
        raise HTTPException(status_code=404, detail='Conference not found')
    conference['_id'] = str(conference['_id'])
    return conference

@app.delete('/conferences/{conf_id}')
async def delete_conference(conf_id: str):
    deleted_conference = await collection.delete_one({'_id': ObjectId(conf_id)})

    if deleted_conference.deleted_count == 0:
        raise HTTPException(status_code=404, detail='Conference not found')
    return {'details': 'Conference deleted successfully'}

@app.post('/conferences', response_model=ConferenceModel)
async def create_conference(conference: ConferenceModel):
    await collection.insert_one(conference.model_dump(by_alias=True))
    return conference
