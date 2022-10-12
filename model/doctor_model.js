const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Specialties  : {
        required: true,
        type: Array
    },
    isMale: {
        required: true,
        type: Boolean
    },
    jobTitle:{
        required:true,
        type:String
    },
    location:{
        required: true,
        type:String
    },
    profileImage:{
        required:true,
        type:String
    },
    name:{
        required:true,
        type:String
    },
    ratting:{
        required:false,
        type:Number
    },
    rattingNumber:{
        required:false,
        type:Number
    },
    body:{
        required:true,
        type:String
    }

})

module.exports = mongoose.model('doctor', dataSchema)