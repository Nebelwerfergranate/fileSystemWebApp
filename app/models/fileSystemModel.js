"use strict";

var File = require("./fileModel");
var Folder = require("./folderModel");

var fs = require("fs");
var path = require("path");

class FileSystemModel{
    constructor(path){
        this._path = path;
        this._root = null;

        if(path != null){
            this._initModel();
        }
    }

    get path(){
        return this._path;
    }

    set path(value){
        this._path = value;
        this._initModel();
    }

    get root(){
        return this._root;
    }

    _initModel(){
        this._root = new Folder({
            path: this._path,
            name: "root"
        });
        this._fillFolder(this._path, this._root.content);
    }

    _fillFolder(dir, content){
        var files = fs.readdirSync(dir);

        for(let f in files){
            var filePath = path.normalize(path.join(dir, files[f]));
            var options = {
                name: files[f],
                path: filePath
            };

            if(fs.statSync(filePath).isDirectory()){
                var folder = new Folder(options);
                content.push(folder);
                this._fillFolder(filePath, folder.content);
            } else {
                var file = new File(options);
                content.push(file);
            }
        }
    }
}

module.exports = FileSystemModel;