const express = require("express");

const app = express();

// Server Setup
const port = 3000;
app.listen(port, () => console.log(`Server Listening on Port ${port}`));


// Routes 
app.get('/hello',(req,res)=>{
    res.send("Task Manager is Active")
})

