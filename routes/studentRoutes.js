const express=require("express")
const { getStudents } = require("../controllers/studentControllers")

const studentRoute=express.Router()

studentRoute.get("/students",getStudents)

// studentRoute.post("/students",addStudent)

module.exports=studentRoute