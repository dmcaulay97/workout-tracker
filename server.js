const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).sort({ day: 1 })
        .then(data => {

            data.forEach((workout) => {
                let totalDuration = 0;
                workout.exercises.forEach((e) => {
                    totalDuration += e.duration
                    console.log(totalDuration);
                })
                workout.totalDuration = totalDuration;
                console.log(workout.totalDuration);
                console.log(workout);
            });
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        });
});

app.listen(PORT, () => {
    console.log("App running on port 3001!");
});