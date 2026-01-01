const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    },
    quantity : {
        type: Number,
        required: true
    },
    price : {
        type: Number,
        required: true
    }
});

const firstSchema = mongoose.model('FirstSchema', schema);

module.exports = firstSchema;