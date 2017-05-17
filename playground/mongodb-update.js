const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect ');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("591b56999715fb4cd495dea1")
}, {
  //update operators
  $set: {
    name: 'Tyler Wilhelm'
  },
  $inc: {
    age: -1
  }
}, {
    returnOriginal: false

}).then((result) => {
    console.log(result);
  });
  //db.close;
});
