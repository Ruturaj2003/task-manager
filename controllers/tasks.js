const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg:"Something went wrong in the server"
    })
  }
  
};

const getAllTasks = (req, res) => {
  res.send("All Items");
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("Update Item");
};
const deleteTask = (req, res) => {
  res.send("Delete Item");
};

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
}; 
