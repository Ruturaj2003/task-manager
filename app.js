const express = require("express");
const tasks = require('./routes/tasks')

// Server Setup
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Server Listening on Port ${port}`));
app.get('/',(req,res)=>{
    res.send("Task Manager is Active")
})

// Midlleware
app.use(express.json())


// Routes 
app.use('/api/v1/tasks',tasks)

