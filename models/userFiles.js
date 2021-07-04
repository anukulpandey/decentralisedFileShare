const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserFiles = new Schema({
    name:{
        type:String,
    },
    url:{
        type:String,
    },
    format:{
        type:String,
    },
    date:{
        type:Date,
    },
    uploaded_by:{
        type:String,
    }
})

const Files = mongoose.model('files', UserFiles);

module.exports = Files;