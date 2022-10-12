const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    list:[
        {

            qu:{
                type:String,
                required:true
            },
            answer:{
                type:String,
                required:true
            }
        }
    ]
})

module.exports = mongoose.model('faq', dataSchema)
