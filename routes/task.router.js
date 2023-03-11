const { Router } = require('express');
const { tasks } = require('../controller');
const router = Router();

router.post('/', tasks.createTask);
router.get('/', tasks.getTasks);
router.get('/:taskId', tasks.getTask);
router.patch('/:taskId', tasks.editTask);
router.delete('/:taskId', tasks.deleteTask);

module.exports = router;
