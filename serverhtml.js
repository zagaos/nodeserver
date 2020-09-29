
var httpserver = require('http');
var fs = require('fs');

httpserver.createServer(function (req , res) {
  console.log('ulr' ,req.url);
  if (req.url === '/') {
    console.log('ulr in ' ,req.url);

    fs.readFile("lab1.html", function (error, pgResp) {
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
  } else {
    //4.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>home page</h1>' + req.url);
    res.end();
}
})
   // res.write('I am jey');
    //res.end();
   //console.log('server is running');
.listen(8081);
