const Student=require("../models/studentModel")

const getStudents=async (req,res)=>{
    const students=await Student.find()

    res.status(200).json({
        data:students
    })
}

// const addStudent=(req,res)=>{
//     res.json({
//         message:"New student added"
//     })
// }

module.exports={getStudents}