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
  db = database

  // db.collection('bikes').remove({});

  // db.collection('bikes').insert({
  //   title: 'Learn to Ride',
  //   sponsor: 'Bike New York',
  //   start: '2016-01-12',
  //   description: 'Learn to Ride-Adults is a free class for adults and mature teens who are ready to ride. Doesn\'t matter if you\'re 18 or 80, we\'ll get you rolling in no time. With our safe, easy, effective method, Learn to Ride students learn how to balance, pedal, stop and steer a bike, as well as adjust a helmet for proper fit. Most people learn to ride in one session, but even if they don’t, they’ll leave equipped with an easy, low-stress way to teach themselves—or, they can join us for another free class!',
  //   max_attendees: 25,
  //   rsvps: [],
  //   comments: [{
  //     name: 'Anna',
  //     comment: 'Sounds like a great time!'
  //   }]
  // })


  process.on('exit', db.close);
})

app.get('/', function (req, res){
  res.render('index');
})

app.get('/calendars', function (req, res){
    res.render('events');     
  })


app.get('/events', function (req, res){
  db.collection('bikes').find({}).toArray(function (err, results){
    console.log(results);
    res.json(results)
  })
})

app.listen(3000);







