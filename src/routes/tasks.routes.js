const express = require('express');
const router = express.Router();

const { 
    createTask, 
    deleteTask, 
    updateTask, 
    getTasks, 
    getTaskById
} = require('../controllers/tasks.controllers');

router.route('/').get(getTasks).post(createTask);
router.route('/:id').delete(deleteTask).patch(updateTask).get(getTaskById);

module.exports = router;