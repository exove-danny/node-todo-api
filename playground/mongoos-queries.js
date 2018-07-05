const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b3dd7f3df0e20f16e46a911qq';
//
// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

var id = '5b144e7f371e84331287d4a5';

User.findById(id).then((user) => {
    if(!user){
        return console.log('Id not found');
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));