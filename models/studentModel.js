const mongoose=require("mongoose")

const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    branch:{
        type:String,
        required:true,
        enum:["CSE","AIML","DS","IoT","IT"]
    },
    college:{
        type:String,
        default:"MRUH"
    }
})

const Student=mongoose.model("Student",studentSchema)

module.exports=Student