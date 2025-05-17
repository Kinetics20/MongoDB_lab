const data = [
    {
        name: 'Poul',
        age: 40,
        city: 'Cracow',
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'John',
        age: 40,
        city: 'Cracow',
        hobbies: ['js', 'python', 'drugs']
    }
]


function avgAge(items){
    let total = 0

    for(let item of items){
        total += item.age
    }
    return total / items.length
}



const avgAge2 = (items) => items.reduce((acc, item) => acc + item.age, 0) / items.length

const ages2 = data.map(item => item.age)
console.log(ages2)

const sumAges = ages2.reduce((acc, ce) => acc + ce)
console.log(sumAges)
