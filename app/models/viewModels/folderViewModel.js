"use strict";

var BaseViewModel = require("./baseViewModel");
var fileTypes = require("../../../shared/enums/fileTypes");

class folderViewModel extends BaseViewModel{
    constructor(options){
        options.type = fileTypes.folder;
        super(options);

        this._parentPathNumber = 0;
        this._content = [];

        this._initialize(options);
    }

    get parentPathNumber(){
        return this._parentPathNumber;
    }
    set parentPathNumber(value){
        this._parentPathNumber = value;
    }

    get content(){
        return this._content;
    }

    _initialize(options){
        super._initialize(options);

        if(options.parentPathNumber != null){
            this._parentPathNumber = options.parentPathNumber;
        }
    }
}

module.exports = folderViewModel;