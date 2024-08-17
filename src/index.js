const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.status(200).send({
        message: 'welcome to the dataBridgr server', status:true
    })
})

module.exports = app;