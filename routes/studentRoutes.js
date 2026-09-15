const express=require("express")

const studentRoute=express.Router()

studentRoute.get("/students",(req,res)=>{
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
})

studentRoute.post("/students",(req,res)=>{
    res.json({
        message:"New student added"
    })
})

module.exports=studentRoute