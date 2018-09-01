const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Users',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log("Hey erro occured.....");
  }
  console.log("Hey Connection Created Successfully...");
  const db = client.db('TdodApp');

   // db.collection('Todos').insertOne({
     // text:"Somthing to do",
     // completed: false
   // },(err,result)=>{
     // if(err){
   //     return console.log("unable to insert..",err);
   //   }
   //   console.log(JSON.stringify(result.ops,undefined,2));
   // });
   db.collection('Users').insertOne({
     Name : "Inba",
     ID   : 2016103533
   },(err,result)=>{
     if(err){
       return console.log("Error occured");
     }
     console.log(result.ops);
   });
  client.close();
});
