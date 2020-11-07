var http = require('http');
var url = require('url');
var dt = require('./datetime');

var express = require("express"); 
var app = express(); 
var path = require("path"); 
var router = express.Router();
router.get('/',function(req,res){ 
  res.sendFile(path.join(__dirname+'/index.html')); 
  //__dirname : It will resolve to your project folder. 
}); 





/*
const server = http.createServer((request, response) => {
    // Write the request to the log. 
    console.log(request);

    // Standard Hello World.
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h3>Hello World!</h3>')

    // Access funcion from a separate JavaScript module.
    response.write("The date and time are currently: " + dt.myDateTime() + "<br><br>");

    // Show the url. 
    response.write("req.url="+request.url+"<br><br>");

    // Suggest adding something tl the url so that we can parse it. 
    response.write("Consider adding '/test?year=2017&month=July' to the URL.<br><br>");
    var q = url.parse(request.url, true).query;
    var txt = q.year + " " + q.month;
    response.write("txt="+txt);

    // Close the response
    response.end('<h3>The End.</h3>');
});


*/
app.use(express.static('public'));
app.use('/', router);
const port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);



