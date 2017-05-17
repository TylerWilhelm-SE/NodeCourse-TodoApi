var mongoose = require('mongoose');

//setup to use promises
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

//model
var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

//add a Todo
var newTodo = new Todo({
  text: 'Take out the Trash',
  completed: false,
  completedAt: 112291
});
//save returns a promise
newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
},
  (e) => {
    console.log('Unable to save todo')

});
