const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercises = new Schema({
    name:{
        type: String,
        trim: true,
        required: "Enter a name"
    },
    type:{
        type: String
    },
    duration:{
        type: Number
    },
    weight:{
        type: Number
    },
    reps:{
        type: Number
    },
    sets:{
        type: Number
    },
    distance:{
        type: Number
    },
    day:{
        type: Date,
        default: Date.now()
    }
})