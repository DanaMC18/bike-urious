var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var mongoUrl = 'mongodb://localhost:27017/bikesDb';
var db;

MongoClient.connect(mongoUrl, function (err, database) {
  if (err) {
    console.log(err)
  }
  console.log('Connected!');
  db = database;

  process.on('exit', db.close);
})

app.get('/', function (req, res){
  res.render('index');
})


app.listen(3000)