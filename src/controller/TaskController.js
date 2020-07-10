const TaskModel = require ('../model/TaskModel');
const { response } = require('express');

class TaskController{

    async create (req, resp){
        const task = new TaskModel(req.body);
        await task
                .save()
                .then(response =>{
                    return resp.status(200).json(response);
                })
                .catch(error =>{
                    return resp.status(500).json(error);
                });
    }

}
module.exports = new TaskController();