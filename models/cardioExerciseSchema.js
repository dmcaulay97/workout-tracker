const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioExcerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "type is required"
    },

    name: {
        type: String,
        trim: true,
        required: "type is required"
    },

    distance: {
        type: Number,
        required: "distance is required"
    },

    duration: {
        type: Number,
        required: "duration is required"
    },

});

const cardioExercise = mongoose.model("cardioExercise", cardioExcerciseSchema);

module.exports = cardioExercise;