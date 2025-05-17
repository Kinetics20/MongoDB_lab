import random
from datetime import datetime, timedelta
from typing import List
from pymongo import MongoClient
from pymongo.collection import Collection


def get_job_title() -> str:
    """
    Returns a random job title from a predefined list.

    Returns:
        str: Randomly selected job title.
    """
    titles: List[str] = [
        'Senior Software engineer - Java',
        'Software Engineer-Java',
        'Senior Software Engineer (.Net)',
        'Senior Full Stack Engineers (Ruby on Rails)',
        'Senior Software Engineer - JavaSE/JavaEE',
        'Engineer / Consultant / Mobile - Xamarin',
        'Engineer / Consultant / Tech Lead - iOS',
        'Database Administrator - SQL',
        'Software Engineer-ASP.Net',
        'PHP Developer',
        'Associate Software Engineer - .NET',
        'Software Engineers - Python',
        'Senior Full Stack Engineer - PHP',
        'Front-End React.js Engineer',
        'Mulesoft Developer',
        'WordPress Developer',
        'Senior Backend Engineer – Node.js',
        'Senior C# Developer',
        'Senior Android Developer',
        '.NET Core Backend Developer'
    ]
    return random.choice(titles)


def get_company() -> str:
    """
    Returns a random company name from a predefined list.

    Returns:
        str: Randomly selected company name.
    """
    companies: List[str] = [
        'Bourke', 'Marpak', 'Headstart', 'SmashTaps', 'Wentworth',
        'Evicio', 'Swivel', 'Konnect', 'Ateam', 'VMWebs', 'Elegant',
        'Nvision', 'Rootcode', 'Hemnette', 'RedBeryl', 'Paramount',
        'Fusion', 'Wonder Software', 'Web Choice', 'Hype'
    ]
    return random.choice(companies)


def get_published_date() -> datetime:
    """
    Generates a random datetime between Jan 1, 2020 and now.

    Returns:
        datetime: Randomly generated publication date.
    """
    start = datetime(2020, 1, 1)
    end = datetime.now()
    delta: timedelta = end - start
    random_seconds = random.randint(0, int(delta.total_seconds()))
    return start + timedelta(seconds=random_seconds)


def insert_jobs(collection: Collection, count: int = 100_000) -> None:
    """
    Inserts a given number of random job documents into the provided MongoDB collection.

    Args:
        collection (Collection): The MongoDB collection where documents will be inserted.
        count (int): Number of documents to insert. Defaults to 100,000.

    Returns:
        None
    """
    jobs = [{
        "title": get_job_title(),
        "company": get_company(),
        "publishedDate": get_published_date(),
        "status": "open"
    } for _ in range(count)]

    collection.insert_many(jobs)


if __name__ == "__main__":
    client = MongoClient("mongodb://localhost:27017/")
    db = client["job_db"]
    jobs_collection = db["jobs"]
    insert_jobs(jobs_collection)