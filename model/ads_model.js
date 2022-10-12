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
    img: {
        required: true,
        type: String
    },
    firstIconTitle: {
        required: true,
        type: String
    },
    firstIconBody : {
        required: true,
        type: String
    },
    secondIconTitle:{
        required: true,
        type: String
    },
    secondIconBody:{
        required: true,
        type: String
    },

    thirdIconTitle:{
        required: true,
        type: String
    },
    thirdIconBody:{
        required: true,
        type: String
    },
    numbers:{
        required:true,
        type:Array
    }
    
    
})

module.exports = mongoose.model('ads', dataSchema)