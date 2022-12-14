const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('what_we_do', dataSchema)