const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
    name : String,
    isDone : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);