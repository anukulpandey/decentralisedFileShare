const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
    name:{
        type:String,
    },
    username:{
        type:String,
    },
    password:{
        type:String,
    }
})

const User = mongoose.model('users', Users);

module.exports = User;