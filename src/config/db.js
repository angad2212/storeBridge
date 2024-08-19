const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://angad2212:mongo123@cluster0.rjx9sao.mongodb.net/ecommerce"

const connectDB = ()=>{
    return mongoose.connect(mongoURL)
}

module.exports = {connectDB}