const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5cea0d7f02fa21f9415df96f11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// }, (e) => {
//   console.log('Error', e);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// }, (e) => {
//   console.log('Error', e);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('id not found');;
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

var userId = '5ce81c58d8356c30cd4950f511';
User.findById(userId).then((user) => {
  if (!user){
    return console.log('User not found');;
  }
  console.log('User', user);
}).catch((e) => console.log(e));
