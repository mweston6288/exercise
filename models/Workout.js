const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises:[{
        type: Schema.Types.ObjectId,
        ref: "Exercises"
    }]
});

const Workout = mongoose.model("Workout", exercisesSchema);
module.exports = Workout;