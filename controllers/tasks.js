const Task = require("../models/Task");

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
    const { id: taskID } = req.params;
    const task = await Task.findOne({
      _id: taskID,
    });
    if (!task) {
      return res.status(404).json({ msg: "Could not find the Task" });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({
      msg: "Something went wrong in the server",
    });
    console.log("Could not find the task");
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks: tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Something went wrong in the server",
    });
  }
};
const deleteTask = async (req, res) => {
  // res.send("Delete Item");
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({
      _id: taskID,
    });
    res.status(200).json({ task });
    if (!task) {
      return res.status(404).json({ msg: `No Task with id : ${taskID} ` });
    }
  } catch (error) {
    res.status(501).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    // By defualy ull get old value back
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No Task with id : ${taskID} ` });
    }
    res.status(200).json({
      task,
    });
  } catch (error) {
    res.status(501).json({ msg: error });
  }

  // res.send("Update Item");
};
module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
