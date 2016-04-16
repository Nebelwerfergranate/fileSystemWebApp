"use strict";

global.rootRequire = function(name) {
    return require("../" + name);
};

var FileSystem = require("./models/fileSystemModel");
var express = require('express');
var app = express();


/********** ROOT PATH **********/
var model = new FileSystem("D:\\Visual Studio");
/********** ROOT PATH **********/


app.use(function(req, res, next){
    console.log("%s %s", req.method, req.url);
    next();
});

app.use(express.static('./public'));

app.get('/getFolder/:folderId?', function(req, res){  // ? means that param is optional
    var folderId = req.params.folderId;

    if(folderId == null){
        folderId = 0;
    }

    folderId = Number.parseInt(folderId);

    if(isNaN(folderId)){
        res.status(400);
        res.send('Bad request');
        return;
    }

    res.json(model.getFolderByPathNumber(folderId));
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});


