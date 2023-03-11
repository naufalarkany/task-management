const repository = require('../../../repositories/tasks.repository');
module.exports = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { title } = req.body;
        if (title || title === '') {
            if (!title) {
                throw Error('Title is required');
            }
        }
        const task = await repository.getOne(taskId);
        if (!task) {
            throw new Error('Task not exist');
        }
        await repository.edit(task.id, req.body);
        res.status(200).send({
            status: 'success',
            msg: 'Edit Task Success',
            data: [],
        });
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            msg: error.message,
        });
    }
};
