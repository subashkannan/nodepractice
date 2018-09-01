const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TdodApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log("Hey erro occured.....");
  }
  console.log("Hey Connection Created Successfully...");
  const db = client.db('TdodApp');

 //   db.collection('Users').findOneAndUpdate({
 //     Name : "Barath Kumar"
 //   },{
 //       $set:{
 //     Name:"Hari Vignesh"
 //   }
 // },{
 //   returnOriginal:false
 // }).then((result)=>{
 //     console.log(result);
 //   });

  db.collection('Users').findOneAndUpdate({
    Name : "Hari Vignesh"
  },{
  $inc:{
    ID : 1 
  }
},
  {
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });

  });
