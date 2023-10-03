const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String,
        required: true
    },
    year:{
        type:Number,
    },
    seatingCapacity:{
        type:Number
    },
    fuel:{
        type:String
    },
    milage:{
        type:Number
    },
    transmissionType:{
        type:String
    },
    price:{
        type:String
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("Car",carSchema);