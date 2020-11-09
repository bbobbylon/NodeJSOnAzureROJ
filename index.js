//const hostname = process.env.HOST; //for azure since we are hosting via cloud server
//const appInsights = require('applicationinsights');
//appInsights.setup('4af73365-c777-477a-aebb-7b7bed901ccd').start();


//var http = require('http');
//var url = require('url');
//var dt = require('./datetime');
const expressHandlebars = require('express-handlebars')
//the below statement grabs the express module to be used 
var express = require("express"); 
const app = express(); 
app.use(express.static(__dirname + '/public'))
var router = express.Router();


var path = require("path"); 



app.engine('handlebars', expressHandlebars(
  {
      defaultLayout: 'main',

}))
app.set('view engine', 'handlebars')






//adding some routes
app.get('/', (req, res) => res.render('home'))


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


app.get('/BrownTutorial' , function (req, res){
  res.render('browntutorial')
});



app.get('/MyFavoriteHobby' , function (req, res){
  res.render('myfavoritehobby')
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




//app.use('/', router);



// this is for browsing on a local host (my own computer) 
const port = process.env.PORT || 8080;
//const server = http.createServer(app);
server.listen(port, () =>{
  console.log("Server running at http://localhost:%d", port);
})




