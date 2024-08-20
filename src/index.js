const express = require('express');
const server = express();
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('database connected');
}

server.get('/', (req,res)=>{
    res.json({status:'success'})
})

server.listen(process.env.PORT, () => {
    console.log('server started');
});


