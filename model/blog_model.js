const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    body: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: Date
    },
    image:{
        required:true,
        type:String
    },
    source:{
        required:true,
        type:String
    },
    title:{
        required:true,
        type: String
    },
    videoUrl:{
        required:false,
        type: String
    },
    thumbnail:{
        required:false,
        type:String
    },
    writter:{
        required:true,
        type: String
    }
})

module.exports = mongoose.model('blog', dataSchema)