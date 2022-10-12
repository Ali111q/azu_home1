const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    image: {
        required: true,
        type: String
    },
   
})

module.exports = mongoose.model('swiper', dataSchema)