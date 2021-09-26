const mongoose = require('mongoose')



const toDoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200   
    },
    author: {
        type: String,
        minlength: 3,
        maxlength: 30  
    },
    uid:{
        type: String
    },
    isComplete:{
        type: Boolean
    },
    date: {
        type: Date,
        default: new Date()
    }
})


const Todo = mongoose.model('todo',toDoSchema)


exports.Todo = Todo