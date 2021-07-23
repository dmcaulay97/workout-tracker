const express = require("express");
const mongojs = require("mongojs");

const app = express();
const databaseUrl = "workoutDB";
const collections = ["plans"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});

app.listen(3001, () => {
    console.log("App running on port 3000!");
});