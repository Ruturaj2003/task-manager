const getAllTasks = (req, res) => {
  res.send("All Items");
};
const getTask = (req, res) => {
  res.send("Get Single Task");
};
const createTask = (req, res) => {
  res.send("Create Single Task");
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
  createTask
};
