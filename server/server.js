"use strict";

var FileSystem = require("./../app/models/fileSystemModel");

var model = new FileSystem("D:\\kursu");

//var util = require('util');

//console.log(util.inspect(model, {showHidden: false, depth: null}));

//console.log(model.pathList[3]);

var express = require('express');
var app = express();

app.use(function(req, res, next){
    console.log("%s %s", req.method, req.url);
    next();
});

app.use(express.static('./public'));

app.get('/model', function(req, res){
    //res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    res.json(model);
});

//app.get('/:page?', function(req, res){  // ? means that param is optional
//    var page = req.params.page;
//    if(page == null){
//        page = "home";
//    }
//});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
