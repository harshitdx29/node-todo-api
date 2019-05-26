const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((results) => {
//   console.log(results);
// });
//
// Todo.findOneAndRemove().then((doc) => {});

Todo.findByIdAndRemove('5ceaa50dbc82b988b9f029e0').then((doc) => {
  console.log(doc);
});
