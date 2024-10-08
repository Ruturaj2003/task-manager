const express = require("express");
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// Server Setup
const app = express();
const port = 3000;

const start  = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server Listening on Port ${port}`));
    } catch (error) {
        console.log(error);
        
    }
}


app.get('/',(req,res)=>{
    res.send("Task Manager is Active")
})
start()

// Midlleware
app.use(express.json())


// Routes 
app.use('/api/v1/tasks',tasks)

