
var httpserver = require('http');
var expressserver =  require('express');
var fs = require('fs');

var app = expressserver();
var  port = 8082;

httpserver.createServer(function (req , res) {
  console.log('ulr' ,req.url);
  if (req.url === '/') {
    console.log('ulr in ' ,req.url);

    fs.readFile("myhtml.html", function (error, pgResp) {
        if (error) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
          console.log('loading page ');

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgResp);
        }
        console.log('loading end ');
        res.end();
    });
  }
   // res.write('I am jey');
    //res.end();
   //console.log('server is running');
}
).listen(8081);

app.listen(port , () => {
  console.log('my express server running port 8082');
} )

var name = 'jey'
var age = 18;
console.log('name' , name);
console.log('name' , age);

var student =  {id: '1001', name: 'Gomsthi Arasu' , section: 'A' };
var student1 =  {id: '1002', name: 'Govin ' , section: 'A' };
var student2 =  {id: '1003', name: 'Jeyapreetha ' , section: 'B' };
var student3 =  {id: '1004', name: 'Kokila ' , section: 'B' };

var students = [];

students.push(student);
students.push(student1);
students.push(student2);
students.push(student3);
console.log('Student list' , students);
// define department object 
var departmetn =  {name: 'EEE' , students }
var college =  { name: 'National Engg Collete' , departmetn };

app.get('/college', (req , res) => {
  res.send(college);
})
app.get('/department', (req , res) => {
  res.send(departmetn);
})
app.get('/department/:id', (req , res) => {
  var stundetId = req.params.id;
  var result = students.find( st => st.id === stundetId )
  console.log('result from array' , result);
  res.send(result);
}

)