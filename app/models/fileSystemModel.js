"use strict";

var File = require("./fileModel");
var Folder = require("./folderModel");
var FileViewModel = require("./viewModels/fileViewModel");
var FolderViewModel = require("./viewModels/folderViewModel");
var ContentItemViewModel = require("./viewModels/contentItemViewModel");

var fs = require("fs");
var path = require("path");
var fileTypes = require("../../shared/enums/fileTypes");

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

    getFolderByPathNumber(pathNumber){

        if(!Number.isInteger(pathNumber)){
            throw new Error(`pathNumber value '${pathNumber}' is not an integer`);
        }

        if (!this._pathList.hasOwnProperty(pathNumber)) {
            return null;
        }

        var folder = this._pathList[pathNumber];
        var folderToReturn = new FolderViewModel({
            name: folder.name,
            parentPathNumber: folder.parentPathNumber
        });

        this._setFolderToReturnContentUsingFolder({
            folder: folder,
            folderToReturn: folderToReturn
        });

        return folderToReturn;
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

    _setFolderToReturnContentUsingFolder(options){
        var folder = options.folder;
        var folderToReturn = options.folderToReturn;

        if (folder == null || folderToReturn == null){
            throw new Error("one or more required parameters is undefined");
        }

        var count = folder.content.length;

        for(let i = 0; i < count; i++){
            var contentItem = folder.content[i];
            var options = {
                name: contentItem.name
            };

            switch(contentItem.type){
                case fileTypes.folder:
                    options.pathNumber = contentItem.pathNumber;
                    folderToReturn.content.push(new ContentItemViewModel(options));
                    break;
                case fileTypes.file:
                    folderToReturn.content.push(new FileViewModel(options));
                    break;
                default:
                    throw new Error(`file type ${contentItem.type} isn't supported`);
            }
        }
    }
}

module.exports = FileSystemModel;