const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
    name : {
        type : String,
        required : [true, "The name must be provided"],
        trim: true,
        maxlength: [20, "too many character, maxlength has to be 20"]
    },
    isDone : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);