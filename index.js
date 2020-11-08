const hostname = process.env.HOST; //for azure since we are hosting via cloud server



var http = require('http');
var url = require('url');
var dt = require('./datetime');
const expressHandlebars = require('express-handlebars')
//the below statement grabs the express module to be used 
var express = require("express"); 
var app = express(); 
var path = require("path"); 
app.use(express.static(__dirname + '/public'))
var router = express.Router();


app.engine('handlebars', expressHandlebars(
  {
      defaultLayout: 'main',

}))
app.set('view engine', 'handlebars')



//adding some routes




//this is to load the landing page (index.html)
router.get('/',function(req,res){ 
  
  res.sendFile(path.join(__dirname+'/index.html')); 
  //__dirname : It will resolve to your project folder. 
}); 



//course syllabus route
app.get('/CourseSyllabus', function (req, res){
  res.render('coursesyllabus')
});

//dice roller route
app.get('/DiceRoller', function (req, res){
  res.render('diceroller')
});

//coming soon route for final project

app.get('/ComingSoon' , function (req, res){
  res.render('comingsoon')
});


//custom 404 page

app.use((req, res) =>
{
    
    res.status(404)
    res.render('404')
})

//custom 500 page

app.use((err, req, res, next)=>
{
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.render('500')
})


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

app.use('/', router);


// this is for browsing on a local host (my own computer) const port = process.env.PORT || 1337;
var port = process.env.PORT || 8080;  //this is for azure since we are hosting on a cloud server


 // for browsing on localhost 
 app.listen(port);
const server = http.createServer(app);
server.listen(port, hostname, () =>{
  console.log("Server running at http://localhost:%d", port);
})




