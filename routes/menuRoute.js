const express = require("express");
const router = express.Router();
const menuItem = require("../models/menuItems")

router.post("/", async (req,res)=>{
    try {
        const doc = new menuItem(req.body);
        const response = await doc.save(); 
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error:"error on inserting menu"})
    }
})

//comment added

router.get("/", async (req,res)=>{
    try {
        const doc = await menuItem.find();
        res.status(200).json(doc)
    } catch (error) {
        res.status(500).json({error:"error on fatching menu"})
    }
})

module.exports=router 