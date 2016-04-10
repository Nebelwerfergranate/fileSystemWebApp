"use strict";

var BaseFileModel = require('./baseFileModel');

class FolderModel extends BaseFileModel{
    constructor(options){
        super(options);
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