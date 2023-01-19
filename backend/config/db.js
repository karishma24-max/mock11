const mongoose = require('mongoose');
require("dotenv").config();

const connect = async()=>{
    return await mongoose.connect(`mongodb+srv://hi:hikiya@cluster0.t721j7n.mongodb.net/test?retryWrites=true&w=majority`)
}

module.exports = connect;