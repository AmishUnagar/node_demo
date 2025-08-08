
const mongoose = require("mongoose")
const mongoUrl = "mongodb://127.0.0.1:27017/hotel"

mongoose.connect(mongoUrl )

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