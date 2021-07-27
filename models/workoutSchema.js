const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [
        {
            type: Schema.Types.Array.objectId,
            ref: "exercise"
        }
    ],

    day: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;