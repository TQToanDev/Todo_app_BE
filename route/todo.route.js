const router = require('express').Router();
const todo = require('../controller/todo.controller')

router.post('/create', todo.post)
router.get('/', todo.get)
router.put('/update', todo.update)
router.delete('/:id', todo.deleteTodo)

module.exports = router;