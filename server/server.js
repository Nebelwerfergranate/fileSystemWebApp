"use strict";

global.rootRequire = function(name) {
    return require("../" + name);
};


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

app.get('/getFolder/:folderId?', function(req, res){  // ? means that param is optional
    var folderId = req.params.folderId;

    if(folderId == null){
        folderId = 0;
    }

    res.json(model.pathList[folderId]);
    // todo remove content from inner folder + remove other unnecessary info.
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


