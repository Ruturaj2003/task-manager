const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../middleware/errors/custom-error");
const Task = require("../models/Task");

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(
      createCustomError("Could not find the Task You are Looking For", 404)
    );
  }
  // return res.status(404).json({ msg: "Could not find the Task" });

  res.status(200).json({ task });
});

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return next(
      createCustomError("Could not find the Task You are Looking For", 404)
    );
  }

  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(
      createCustomError("Could not find the Task You are Looking For", 404)
    );
  }

  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
