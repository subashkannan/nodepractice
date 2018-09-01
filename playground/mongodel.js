const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TdodApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log("Hey erro occured.....");
  }
  console.log("Hey Connection Created Successfully...");
  const db = client.db('TdodApp');

   db.collection('Users').deleteOne({Name : "Subash"}).then((result)=>{
    console.log(result);
   });

  });
