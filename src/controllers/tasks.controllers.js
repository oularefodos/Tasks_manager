const TaskModel = require('../models/tasks.model');

const createTask = async (req, res) => {
    try {
        const task = await TaskModel.create(req.body);
        await task.save();
        res.status(201).json({success : true, data : task});
    }
    catch (error) {
        res.status(500).json({success : false, message : error});
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const data= req.body;
        const task = await TaskModel.findByIdAndUpdate(id, data, {new : true, runValidators: true});
        if (!task) return res.status(404).json({msg : `There is no task with this id : ${id}`});
        res.status(201).json({success : true, data : task});
    }
    catch (error) {
        res.status(500).json({success : false, message : error});
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await TaskModel.deleteOne({ _id : id });
        if (!task) return res.status(404).json({msg : `There is no task with this id : ${id}`});
        res.status(201).json({success : true, data : task});
    }
    catch (error) {
        res.status(500).json({success : false, message : error});
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.status(200).json({success : true, data : tasks});
    }
    catch (error) {
        res.status(500).json({success : false, message : error});
    }
};

const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await TaskModel.findById(id);
        if (!task) return res.status(404).json({msg : `There is no task with this id : ${id}`});
        res.status(200).json({success : true, data : task});
    }
    catch (error) {
        res.status(500).json({success : false, message : error});
    }
};

module.exports = { createTask, deleteTask, updateTask, getTasks, getTaskById };
