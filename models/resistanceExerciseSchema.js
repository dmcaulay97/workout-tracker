const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioExcerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
    },

    name: {
        type: String,
        trim: true,
    },

    weight: {
        type: Number,
    },

    sets: {
        type: Number,
    },

    reps: {
        type: Number,
    },


    duration: {
        type: Number,
    },

    distance: {
        type: Number,
    },

});

const cardioExercise = mongoose.model("cardioExercise", cardioExcerciseSchema);

module.exports = cardioExercise;