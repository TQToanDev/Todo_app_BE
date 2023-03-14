const DB = require('../service/connectDB')

module.exports = class Todo{
    static post = (req, res)=>{
        DB.create({
            todo: req.body.todo,
            status: req.body.status
        }).then(function(data){
           res.json(data)
        }).catch(function(e){
            res.json('Loi')
        }) 
    }

    static get = (req,res)=>{
        DB.find({})
        .then(function(data){
            res.json(data);
        }).catch(function(e){
            res.json('Loi')
        }) 
    }

    static update = (req,res)=>{
        DB.updateOne({
        _id: req.body._id
    }, {
        todo: req.body.todo,
        status: req.body.status
    }).then(function(){
        res.json('update success')
    }).catch(function(e){
        res.json('Loi')
    }) 
    }

    static deleteTodo = (req,res)=>{
        DB.deleteOne({
            _id: req.params.id
        })
        .then(function(){
            res.json('delete success')
        }).catch(function(e){
            res.json('Loi')
        }) 
    }
}