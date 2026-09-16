const getStudents=(req,res)=>{
    res.json([
        {
            name:"Virat",
            branch:"CSE",
        },
        {
            name:"Rohit",
            branch:"AIML",
        },
        {
            name:"Rahul",
            branch:"DS",
        }
    ])
}

const addStudent=(req,res)=>{
    res.json({
        message:"New student added"
    })
}

module.exports={getStudents,addStudent}