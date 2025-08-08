
const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"name is reqquired"]
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],  
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique:[true,"mobile no must be uniuq"]
    }
})

const Person = mongoose.model("person",personSchema)

module.exports=Person

