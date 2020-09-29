
var httpserver = require('http');
const express = require('express');
const app = express();
const port = 8082;

httpserver.createServer(function (req , res) {

    res.write('I am jey');
    res.end();
   console.log('server is running');
}
).listen(8081);

var student1 = {id: '1001' , name: '' , section: '' };
var student2 = {id: '1002' , name: '' , section: '' };
var student3 = {id: '1003' , name: '' , section: '' };
var student4 = {id: '1004' , name: '' , section: '' };
var students = [] ;
students.push(student1);
students.push(student2);
students.push(student3);
students.push(student4);
var department = {name : 'ECE' , students }
console.log(department);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

app.get('/department', (req, res) => {
  
    res.send(department);
  })
  app.get('/department/:name/student/:id', (req, res) => {

    console.dir(req.originalUrl) // '/admin/new'
  console.dir(req.baseUrl) // '/admin'
  console.dir(req.path) // '/new
    var name = req.params.name;
    var id = req.params.id;
    console.log('student  name ' , name);
    console.log('student  id ' , id);



    var allstudent = [];
    allstudent = department.students;
    console.log('student list', allstudent);

    var studentout = allstudent.find( st => st.id === id ) ;
    
    console.log(studentout);
      res.send(studentout);
    })
