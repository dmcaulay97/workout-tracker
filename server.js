const express = require("express");
const mongojs = require("mongojs");
const routes = require('./controllers');

const app = express();
app.use(routes);

const databaseUrl = "workoutDB";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});

app.listen(3001, () => {
    console.log("App running on port 3000!");
});