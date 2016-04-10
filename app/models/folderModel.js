"use strict";

var BaseFileModel = require('./baseFileModel');
var fileTypes = require('../../shared/enums');

class FolderModel extends BaseFileModel{
    constructor(options){
        super(options);

        this._type = fileTypes.folder;
        this._content = [];
        this._pathNumber = 0;
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
}

module.exports = FolderModel;