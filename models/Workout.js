const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    totalDuration: {
        type: Number,
        default: 0
    },
    exercises:[{
        type: Schema.Types.ObjectId,
        ref: "Exercises"
    }]
});

const Workout = mongoose.model("Workout", exercisesSchema);
module.exports = Workout;