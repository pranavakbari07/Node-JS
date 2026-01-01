const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/NodeGIM")

const db = mongoose.connection;

db.once("open", () => {
    console.log("Db is connected successfully");
});

module.exports = db;