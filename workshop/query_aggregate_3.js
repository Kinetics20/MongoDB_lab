// show dbs

// use job_db

db.jobs.findOne({})

//show dbs

//use job_db

//db.jobs.findOne({})

db.jobs.aggregate([
    { $match: { $or: [{ title: { $regex: "Java", $options: "i" } }, { title: { $regex: "Rails", $options: "i" } }, { title: { $regex: ".NET", $options: "i" } }, { title: { $regex: "Android", $options: "i" } }, { title: { $regex: "Angular", $options: "i" } }, { title: { $regex: "PHP", $options: "i" } }, { title: { $regex: "Mulesoft", $options: "i" } }, { title: { $regex: "Go", $options: "i" } }, { title: { $regex: "SQL", $options: "i" } }, { title: { $regex: "C#", $options: "i" } }, { title: { $regex: "Wordpress", $options: "i" } }, { title: { $regex: "ASP.Net", $options: "i" } }, { title: { $regex: "Python", $options: "i" } }, { title: { $regex: "AWS", $options: "i" } }, { title: { $regex: "iOS", $options: "i" } }, { title: { $regex: "React.js", $options: "i" } }, { title: { $regex: "Node.js", $options: "i" } }, { title: { $regex: "Xamarin", $options: "i" } }] } },

    {
        $project: {
            "tech": {

                $switch: {
                    branches: [
                        { case: { "$regexMatch": { "input": "$title", "regex": /Java/, options: "i" } }, then: "Java" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /Rails/, options: "i" } }, then: "Rails" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /ASP.Net/, options: "i" } }, then: "ASP.Net" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /.NET/, options: "i" } }, then: ".NET" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /Android/, options: "i" } }, then: "Android" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /Angular/, options: "i" } }, then: "Angular" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /PHP/, options: "i" } }, then: "PHP" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /Mulesoft/, options: "i" } }, then: "Mulesoft" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /Go/, options: "i" } }, then: "Go" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /SQL/, options: "i" } }, then: "SQL" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /C#/, options: "i" } }, then: "C#" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /Wordpress/, options: "i" } }, then: "Wordpress" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /Python/, options: "i" } }, then: "Python" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /AWS/, options: "i" } }, then: "AWS" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /iOS/, options: "i" } }, then: "iOS" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /React.js/, options: "i" } }, then: "React.js" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /Node.js/, options: "i" } }, then: "Go" },
                        { case: { "$regexMatch": { "input": "$title", "regex": /Xamarin/, options: "i" } }, then: "Xamarin" },
                    ],
                    default: ""
                }

            }

        }
    },
    {
        $group: {
            "_id": "$tech",
            total: {
                $sum: 1
            }
        }
    }
])

const techList = ['Java', 'Oracle', '.NET', 'Android', 'Python', 'PHP', 'Laravel', 'Node', 'MySQL', 'ASP.NET', 'Wordpress', 'JQuery', 'Azure', 'AWS','iOS', 'Go', 'React', 'Xamarin'];

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





