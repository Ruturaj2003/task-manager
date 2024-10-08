const Task = require("../models/Task");
//TODO: GET ALL TASKS
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Something went wrong in the server",
    });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params.id;
    const task = await Task.findOne({
      _id: taskID,
    });
    if (!task) {
      return res.status(404).json({ msg: "Could not find the Task" });
    }

    res.staus(200).json({ task });
  } catch (error) {
    res.status(500).json({
      msg: "Something went wrong in the server",
    });
    console.log("Could not find the task");
  }
};

const getAllTasks = (req, res) => {
  res.send("All Items");
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
