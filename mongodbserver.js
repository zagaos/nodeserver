var express = require('express');
var app = express();
var body_parser = require('body-parser');

var database, collection;

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost';

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)

    MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
      if(error) {
          throw error;
      }
      database = client.db("internship");
      //collection = database.collection("student");
      console.log("Connected to `internship !");
  });

 });
//get student 
app.get('/student', (req , res) => {
  
  var cursor = database.collection('student').find({}).
  toArray((error, result) => {
          if(error) {
              return res.status(500).send(error);
          }
          console.log("data" , result);
          res.send(result);
});
});
// add document to student database
app.get('/add',function(req,res){
  var student =  {id: '1003', name: 'Harish Raj' , section: 'B' };

  database.collection('student').insertOne(student, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });

  });

  app.get('/findone',function(req,res){
    var student =  { name: 'Harish Raj'  };
  
    var cursor = database.collection('student').find(student).
    toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            console.log("data" , result);
            res.send(result);
  });
  
    });

  // add multiple doc

  app.get('/addmuliple',function(req,res){
    var students =  [{id: '1003', name: 'Harish Raj' , section: 'B' },
    {id: '1004', name: 'Kirthik Rosan Raj' , section: 'A' },
    {id: '1005', name: 'Sridhar' , section: 'A' }
  ];
  
    database.collection('student').insertMany(students, function(err, res) {
        if (err) throw err;
        console.log("multile  documents inserted");
      });
  
    });