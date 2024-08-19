const { connectDB } = require('./config/db')
const app = require('./index')
PORT = 3000

app.listen(PORT, async ()=>{
    await connectDB();
    console.log(`working on port ${PORT}`)
})
