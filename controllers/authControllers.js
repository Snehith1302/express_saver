const Student=require("../models/studentModel")
const bcrypt=require("bcryptjs")

const login=(req,res)=>{

}

const signup=async (req,res)=>{
    const {name,email,age,branch,password,college}=req.body

    if(!name||!email||!age||!branch||!password){
        return res.status(400).json({
            message : "Provide valid input"
        })
    }

const existingStudent = await Student.findOne({email : email})

if(existingStudent){
    return res.status(400).json({
        message:"Email id is already registered"
    })
}

const encryptPass=await bcrypt.hash(password,4)

const student=await Student.create({
    name:name,
    email:email,
    password:encryptPass,
    branch:branch,
    age:age
})
res.status(200).json({
    message:"Account created successfully"
})
}

module.exports={
    login,
    signup
}