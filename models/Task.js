const mongoose = require("mongoose");

const TaskManagerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Give a name dude"],
    maxlength: [20, "Give a Shorter Name"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskManagerSchema);
