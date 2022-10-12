const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: false,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    phone: {
        required: false,
        type: String
    },
    subject: {
        required: false,
        type: String
    },
    message: {
        required: false,
        type: String
    },
   
})

module.exports = mongoose.model('subscripe', dataSchema)