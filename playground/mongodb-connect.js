//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {
//   name: 'Tyler',
//   age: 25
// };
//
// var {name} = user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect ');
  }
  console.log('Connected to MongoDB server');

  //insert new record into Collection
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   //success code
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //Insert new doc into Users(name, age, location)
  // db.collection('Users').insertOne({
  //
  //   name: 'Tyler Wilhelm',
  //   age: 25,
  //   location: 'Peoria, AZ'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to create Users', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  //
  // })

  db.close;
});
