"use strict";

var BaseFileModel = require("./baseFileModel");
var fileTypes = require("../../shared/enums/fileTypes");

class FolderModel extends BaseFileModel{
    constructor(options){
        options.type = fileTypes.folder;
        super(options);

        this._content = [];
        this._pathNumber = 0;

        this._initialize(options);
    }

    get content(){
        return this._content;
    }

    get pathNumber (){
        return this._pathNumber;
    }
    set pathNumber(value){
        this._pathNumber = value;
    }

    _initialize(options){
        super._initialize(options);

        if(options.pathNumber != null){
            this._pathNumber = options.pathNumber;
        }
    }
}

module.exports = FolderModel;