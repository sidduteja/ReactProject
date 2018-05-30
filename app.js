const express = require('express');
const path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var AWS = require('aws-sdk');
const fs = require('fs')



var s3Router = require('react-s3-uploader/s3router');
var Login = require('./routes/login');
const app = express()
const port =  4000
app.use('/login', Login);

// app.get('/', function(request, response) {
//   console.log('Home page visited!');
//   const filePath = path.resolve(__dirname, 'public', 'index.html');

//   // read in the index.html file
//   fs.readFile(filePath, 'utf8', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
    
//     // replace the special strings with server generated strings
//     data = data.replace(/\$OG_TITLE/g, 'Home Page');
//     data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
//     result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
//     response.send(result);
//   });
// });

// app.get('/cars', function(request, response) {
//   console.log('Home page visited!');
//   const filePath = path.resolve(__dirname, 'public', 'index.html');

//   // read in the index.html file
//   fs.readFile(filePath, 'utf8', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
    
//     // replace the special strings with server generated strings
//     data = data.replace(/\$OG_TITLE/g, 'car Page');
//     data = data.replace(/\$OG_DESCRIPTION/g, "car page description");
//     result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
//     response.send(result);
//   });
// });
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use('/', express.static(__dirname + "/public"));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});


  

  app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  })

 
app.listen(port)
console.log("server started on port " + port)
