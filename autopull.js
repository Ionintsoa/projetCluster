var express = require('express');
var http = require('http');
var app = express();

app.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    http.get({
      hostname: '192.168.8.107',
      port: 1337,
      path: '/',
      agent: false  // create a new agent just for this one request
    }, (result) => {
      console.log("Ndana amizay jereo le an'i iony eh");
    });
    http.get({
      hostname: '192.168.8.106',
      port: 1337,
      path: '/',
      agent: false  // create a new agent just for this one request
    }, (result) => {
      console.log("Ndana amizay jereo le an'i cedy eh");
    });
});

app.listen(3000);
console.log("Andana amizay mpush oooohhh");