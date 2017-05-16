const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect ');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').find({name: "Tyler Wilhelm"}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({name: "Tyler Wilhelm"}).count().then((count) => {

    console.log(`Users count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
  db.close;
});
