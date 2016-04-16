"use strict";

var BaseViewModel = require("./baseViewModel");
var fileTypes = require("../../../shared/enums/fileTypes");

class ContentItemViewModel extends BaseViewModel{
    constructor(options){
        options.type = fileTypes.folder;
        super(options);

        this._pathNumber = 0;

        this._initialize(options);
    }

    get pathNumber(){
        return this._pathNumber;
    }
    set pathNumber(velue){
        this._pathNumber = value;
    }

    _initialize(options){
        super._initialize(options);

        if(options.pathNumber != null){
            this._pathNumber = options.pathNumber;
        }
    }
}

module.exports = ContentItemViewModel;