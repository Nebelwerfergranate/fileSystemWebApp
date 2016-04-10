"use strict";

var FileSystem = require("./app/models/fileSystemModel");

var model = new FileSystem("D:/kursu");


//console.log(model);

var util = require('util');

console.log(util.inspect(model, {showHidden: false, depth: null}));

console.log("test");


//console.log(getFiles('D:/kursu'));


//
//
//var express = require('express');
//var app = express();
//
//console.log(app);
//
////app.get('/', function (req, res) {
////    //res.send('Hello World!');
////    res.send({
////        name: 'bibo',
////        age: 25
////    });
////});
//
//app.use(function(req, res, next){
//    console.log("%s %s", req.method, req.url);
//    next();
//});
//
////app.use(express.static(__dirname + '/public'));
//
//var store = {
//    home:{
//        page: "Our Super Awesome App",
//        content: "Home, sweet home"
//    },
//    about: {
//        page: "About page",
//        content: "Some incredibly awesome content"
//    },
//    downloads: {
//        page: "Downloads Page",
//        content: "Download all stuff here"
//    },
//    profiles: {
//        page: "Profile Page",
//        content: "Yhis is your profile, dawg"
//    }
//};
//
//app.set('view engine', 'jade' );
//
//app.get('/:page?', function(req, res){  // ? means that param is optional
//    var page = req.params.page;
//    if(page == null){
//        page = "home";
//    }
//    var data = store[page];
//
//    if(data == null){
//        res.redirect('/');
//        return;
//    }
//    data.links = Object.keys(store);
//    console.log(data);
//    res.render('main', data);
//});
//
//app.listen(3000, function () {
//    console.log('Example app listening on port 3000!');
//});
