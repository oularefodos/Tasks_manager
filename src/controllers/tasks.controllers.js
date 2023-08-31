const TaskModel = require('../models/tasks.model');
const asyncWrapper = require('../middleware/asyncWrapper');
const { createNotFoundError } = require('../../errors/not-foundError');

const createTask = asyncWrapper (async (req, res) => {
    const task = await TaskModel.create(req.body);
    res.status(201).json({success : true, data : task});
});

const updateTask = asyncWrapper (async (req, res, next) => {
    const { id } = req.params;
    const data= req.body;
    const task = await TaskModel.findByIdAndUpdate(id, data, {new : true, runValidators: true});
    if (!task) return next(createNotFoundError(`There is no task with this id : ${id}`, 404));
    res.status(201).json({success : true, data : task});
});

const deleteTask = asyncWrapper( async (req, res, next) => {
    const { id } = req.params;
    const task = await TaskModel.deleteOne({ _id : id });
    if (!task) return next(createNotFoundError(`There is no task with this id : ${id}`, 404));
    res.status(201).json({success : true, data : task});
});

const getTasks = asyncWrapper(async (req, res) => {
    const tasks = await TaskModel.find();
    res.status(200).json({success : true, data : tasks});
});

const getTaskById = asyncWrapper( async (req, res, next) => {
    const { id } = req.params;
    const task = await TaskModel.findById(id);
    if (!task) return next(createNotFoundError(`There is no task with this id : ${id}`, 404));
    res.status(200).json({success : true, data : task});
});

module.exports = { createTask, deleteTask, updateTask, getTasks, getTaskById };
