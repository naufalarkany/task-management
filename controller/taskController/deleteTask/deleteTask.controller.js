const repository = require('../../../repositories/tasks.repository');
module.exports = async (req, res) => {
    try {
        const { taskId } = req.params;
        const task = await repository.getOne(taskId);
        if (!task) {
            throw new Error('User not exist');
        }
        await repository.delete(taskId);
        res.status(200).send({
            status: 'success',
            msg: 'Delete User Success',
            data: [],
        });
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            msg: error.message,
        });
    }
};
