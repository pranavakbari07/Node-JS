const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: Number,
        required: true,
    },
})

const firstSchema = mongoose.model("student",Schema)

module.exports = firstSchema