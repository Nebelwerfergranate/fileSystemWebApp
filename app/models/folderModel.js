"use strict";

var BaseFileModel = require('./baseFileModel');

class FolderModel extends BaseFileModel{
    constructor(options){
        super(options);
        this._content = [];
    }

    get content(){
        return this._content;
    }
}

module.exports = FolderModel;