const repository = require('../../../repositories/tasks.repository');
module.exports = async (req, res) => {
    try {
        const { taskId } = req.params;
        const task = await repository.getOne(taskId);
        res.status(200).send({
            status: 'success',
            msg: 'Get Task Success',
            data: task ? task : [],
        });
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            msg: error.message,
        });
    }
};
