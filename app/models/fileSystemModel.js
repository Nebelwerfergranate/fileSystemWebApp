"use strict";

var File = require("./fileModel");
var Folder = require("./folderModel");

var fs = require("fs");
var path = require("path");

class FileSystemModel{
    constructor(path){
        this._path = path;
        this._root = null;

        this._pathList = null;

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

    get pathList(){
        return this._pathList;
    }


    _initModel(){
        this._root = new Folder({
            path: this._path,
            name: "root"
        });
        this._pathList = new Array();
        this._fillFolder(this._path, this._root);
    }

    _fillFolder(dir, folder){
        this._pathList.push(folder);
        folder.pathNumber = this._pathList.length - 1;
        var files = fs.readdirSync(dir);

        for(let f in files){
            var filePath = path.normalize(path.join(dir, files[f]));
            var options = {
                name: files[f],
                path: filePath
            };

            if(fs.statSync(filePath).isDirectory()){
                var newFolder = new Folder(options);
                folder.content.push(newFolder);
                this._fillFolder(filePath, newFolder);
            } else {
                var file = new File(options);
                folder.content.push(file);
            }
        }
    }
}

module.exports = FileSystemModel;