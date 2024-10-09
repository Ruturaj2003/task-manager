const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
require("dotenv").config();

// Server Setup
const app = express();
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server Listening on Port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

// Midlleware
app.use(express.static("./public"));
app.use(express.json());
// Routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
