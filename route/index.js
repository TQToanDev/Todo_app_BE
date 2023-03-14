const todoRouter = require('./todo.route');

module.exports = function router(app){
    app.use('/api/todo', todoRouter)
}