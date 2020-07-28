const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_heading: {
        type: String
    },
    todo_desc: {
        type: String
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:"User"
    }

})

module.exports = mongoose.model('Todo', Todo);