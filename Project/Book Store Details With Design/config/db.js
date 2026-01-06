const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/mydatabase");

const db = mongoose.connection;

db.once("open", ()=>{
    console.log("Database connected successfully");
})

module.exports = db;

