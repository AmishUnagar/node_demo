
require("dotenv").config()
const mongoose = require("mongoose")
const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl)

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("db connected ");
    
})

db.on("error",()=>{
    console.log("db error ");
    
})

db.on("disconnected",()=>{
    console.log("db disconnected ");
    
})


module.exports=db 