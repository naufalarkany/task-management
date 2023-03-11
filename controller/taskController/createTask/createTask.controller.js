const repository = require('../../../repositories/tasks.repository');
module.exports = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) {
            throw Error('Title is required');
        }
        const createdTask = await repository.create(req.body);
        res.status(200).send({
            status: 'success',
            msg: 'Successfully created task',
            data: createdTask,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: 'failed',
            msg: error.message,
        });
    }
};
