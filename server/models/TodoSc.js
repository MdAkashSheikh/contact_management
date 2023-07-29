const mongoose = require('mongoose');

const todoSc = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('todo-User', todoSc);