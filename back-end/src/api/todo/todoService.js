const Todo = require('./todo')

Todo.methods(['get', 'put', 'post', 'delete']);
Todo.updateOptions({new: true, runValidators: true});
module.exports = Todo; 