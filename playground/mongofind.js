const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TdodApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log("Hey erro occured.....");
  }
  console.log("Hey Connection Created Successfully...");
  const db = client.db('TdodApp');

  // db.collection('Users').find({
  //   _id :new ObjectID('5b8a33a2627f2d1e94a9f0e4')
  //  }).toArray().then((docs)=>{
  //   console.log('Users');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log("Error Occured....");
  // });

  db.collection('Users').find().count().then((count)=>{
    console.log(`Users count:${count}`);
  },(err)=>{
    console.log("Error Occured....");
  });
  //client.close();
});
