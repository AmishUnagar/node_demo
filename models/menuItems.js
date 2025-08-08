const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"name is importent"]
    },
    price:{
        type: Number,
        required: true
    },
    test:{
        type:String,
        enum: ['spicy','sweet','sour'],
        required: true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    }
})

const MenuItem = mongoose.model("menuitems",menuSchema);

module.exports=MenuItem