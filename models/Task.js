const mongoose = require('mongoose')

const TaskManagerSchema = new mongoose.Schema({

    name: String,
    completed: Boolean

}) 



module.exports = mongoose.model('Task', TaskManagerSchema)