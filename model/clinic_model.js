const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Specialties  : {
        required: true,
        type: Array
    },
    body:{
        required:true,
        type:String
    },
    type:{
        required:true,
        type:String
    },
    location:{
        required: true,
        type:String
    },
    clinicImage:{
        required:true,
        type:String
    },
    clinicName:{
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
    }

})

module.exports = mongoose.model('clinic', dataSchema)