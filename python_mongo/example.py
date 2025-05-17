from functools import reduce

data = [
    {
        'name': 'Poul',
        'age': 40,
        'city': 'Cracow',
        'hobbies': ['js', 'python', 'drugs']
    },
    {
        'name': 'John',
        'age': 40,
        'city': 'Cracow',
        'hobbies': ['js', 'python', 'drugs']
    }
]

def avg_age(items):
    return sum(item['age'] for item in items) / len(items)


def avg_age_1(items):
    total = 0
    for item in items:
        total += item['age']
    return total / len(items)

avg_age_2 = lambda items: sum(item['age'] for item in items)

ages = list(map(lambda item: item['age'], data))
print(ages)

sum_ages = reduce(lambda acc, ce: acc + ce, ages)