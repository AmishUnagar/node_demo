const express = require("express");
const router = express.Router();
const person = require("../models/person");

router.post("/", async function (req, res) {
  try {
    const newPerson = new person(req.body);
    const respose = await newPerson.save();
    console.log("data saved");
    res.status(200).json(respose);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "data nao fatched" });
  }
});

router.get("/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const data = await person.find({ name: name });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "data nao fatched" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updated_data = await person.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if(!updated_data){
        res.status(404).json({error:"user not found"}); 
    }
    res.status(200).json(updated_data);
  } catch (error) {
    res.status(500).json({ error: "data not updated" });
  }
});

router.delete("/:id", async(req,res)=>{
    try {
        const id = req.params.id;
        const del = await person.findByIdAndDelete(id);
        res.status(200).json(del);
    } catch (error) {
        res.status(500).json({ error: "data not deleted" });
    }
})

module.exports = router;
