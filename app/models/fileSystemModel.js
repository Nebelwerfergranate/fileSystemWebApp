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

    _fillFolder(filePath, folder){
        this._pathList.push(folder);
        folder.pathNumber = this._pathList.length - 1;
        var files = fs.readdirSync(filePath);

        for(let f in files){
            var newFilePath = path.normalize(path.join(filePath, files[f]));
            var options = {
                name: files[f],
                path: newFilePath,
                parentPathNumber: folder.pathNumber
            };

            if(fs.statSync(newFilePath).isDirectory()){
                var newFolder = new Folder(options);
                folder.content.push(newFolder);
                this._fillFolder(newFilePath, newFolder);
            } else {
                var file = new File(options);
                folder.content.push(file);
            }
        }
    }
}

module.exports = FileSystemModel;