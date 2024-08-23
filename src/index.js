const express = require('express');
const server = express();
const mongoose = require('mongoose');
const createProduct = require('./controller/Product');
require('dotenv').config();
const productRouter = require('./routes/Products'); 

main().catch(err=> console.log('error'));

server.use(express.json()); //to expect json type of body
server.use("/products", productRouter); // This should work if productRouter is defined


async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('database connected');
}

server.get('/', (req,res)=>{
    res.json({status:'success'})
})

server.listen(process.env.PORT, () => { //install npm package dotenv
    console.log('server started');
});


