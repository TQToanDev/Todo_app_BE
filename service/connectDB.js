const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Todo = new Schema({
    // _id: ObjectId,
    todo: String,
    status: String
},{
    collection: 'TodoList'
});

module.exports = mongoose.model('TodoList', Todo);
