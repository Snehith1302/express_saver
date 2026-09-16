const express=require("express")
const { getStudents, addStudent } = require("../controllers/studentControllers")

const studentRoute=express.Router()

studentRoute.get("/students",getStudents)

studentRoute.post("/students",addStudent)

module.exports=studentRoute