const jobMap = function () {
    const techList = ['Java', 'Oracle', '.NET', 'Android', 'Python', 'PHP', 'Laravel', 'Node', 'MySQL', 'ASP.NET', 'Wordpress', 'JQuery', 'Azure', 'AWS','iOS', 'Go', 'React', 'Xamarin'];

    let isMatch = false;

    for (let i of techList){
        let r = new RegExp(tech, 'i')
        isMatch = r.test(this.title)

        if(isMatch){
            emit(tech, 1)
        }
    }
}

const countJobs = function(keyTech, valuesOccurences){
    return Array.sum(valuesOccurences)
}

db.jobs.mapReduce(jobMap, countJobs, {
    out: 'technology_stats'
})

// show dbs

db.rent.findOne({})