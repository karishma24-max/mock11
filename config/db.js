const mongoose = require('mongoose');
require("dotenv").config();

const connect = async()=>{
    return  mongoose.connect(`mongodb+srv://kar:cha@cluster0.cialw1s.mongodb.net/user?retryWrites=true&w=majority`)
}

module.exports = connect;