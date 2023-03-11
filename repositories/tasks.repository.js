const { Op } = require('sequelize');
const { Task: Model } = require('../models');

exports.create = async (newTask) =>
    new Promise((resolve, reject) => {
        Model.create(newTask)
            .then((data) => {
                resolve(data);
            })
            .catch(reject);
    });

exports.getAll = () =>
    new Promise((resolve, reject) => {
        Model.findAll()
            .then((data) => {
                resolve(data ? data : null);
            })
            .catch(reject);
    });

exports.getOne = (id) =>
    new Promise((resolve, reject) => {
        Model.findOne({
            where: {
                id: id,
            },
        })
            .then((data) => {
                resolve(data ? data : null);
            })
            .catch(reject);
    });

exports.delete = async (taskId) =>
    new Promise((resolve, reject) => {
        Model.destroy({
            where: {
                id: taskId,
            },
        })
            .then(resolve)
            .catch(reject);
    });

exports.edit = async (taskId, editedTask) =>
    new Promise((resolve, reject) => {
        Model.update(editedTask, {
            where: {
                id: taskId,
            },
        })
            .then((data) => {
                resolve(data);
            })
            .catch(reject);
    });
