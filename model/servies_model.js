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
    type: {
        required: true,
        type: Number
    },
    firstImages: {
        required: true,
        type: Array
    },
    
    firstTitle: {
        required: true,
        type: String
    },
    firstBody: {
        required: true,
        type: String
    },
    secondImages: {
        required: true,
        type: String
    },
    secondTitle: {
        required: true,
        type: String
    },
    secondBody: {
        required: true,
        type: String
    },
    thirdTitle: {
        required: true,
        type: String
    },
    thirdBody: {
        required: true,
        type: String
    },
    fourthTitle: {
        required: true,
        type: String
    },
    fourthBody: {
        required: true,
        type: String
    },
    perks:{
        required:true,
        type:Array
    },
    firstPerkBody:{
        required:true,
        type:String
    },
    secondPerk:{
        required:true,
        type:Object
    },
    firstPerkCircle:{
        required:true,
        type:Object
    },
    secondPerkCircle:{
        required:true,
        type:Object
    },
    fifth:{
        required:true,
        type:Object
    },
    

})

module.exports = mongoose.model('servies', dataSchema)