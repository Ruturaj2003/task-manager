const getAllTasks = (req, res) => {
  res.send("All Items");
};
const getTask = (req, res) => {
  res.json({id:req.params.id})
};
const createTask = (req, res) => {
 res.json(req.body)
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
