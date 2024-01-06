const {Todo} = require('../models');

class TodosController {
    static async getAll(req, res, next) {
        try {
            const data = await Todo.findAll(
                {where: {status: 'In Progress'}}
            );
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const {id} = req.params;

            const data = await Todo.findByPk(id);
            if (!data) throw {name: 'notFound'};

            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    } 

    static async create(req, res, next) {
        try {
            const {title, status} = req.body
            const newData = await Todo.create({title, status})
            res.status(201).json(newData)
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            await Todo.update(
                {status: 'Done'},
                {where: {id}})
            res.status(200).json({message: 'Todo telah dihapus'})
        } catch (error) {
            next(error);
        }
    }
};

module.exports = TodosController