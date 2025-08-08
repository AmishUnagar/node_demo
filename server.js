const express = require("express")
const bodyParser = require("body-parser")
const db = require('./db')
const app = express();
 

app.use(bodyParser.json()); 
app.get("/",function(req,res){
    res.send("hello world")
})

const personRoute = require("./routes/personRoute")
app.use("/person",personRoute);

const menuRoute = require("./routes/menuRoute")
app.use("/menu",menuRoute);


app.listen(3000,()=>{
    console.log("server runing on 3000 port");
    
})

// https://github.com/lilianaba/jewellery-e-commerce/tree/main/client