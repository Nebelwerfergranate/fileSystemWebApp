"use strict";

class BaseFileModel{
    constructor(options){
        this._name = "";
        this._path = "";

        if(options.name != null){
            this._name = options.name;
        }

        if(options.path != null){
            this._path = options.path;
        }
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }

    get path(){
        return this._path;
    }

    set path(value){
        this._path = value;
    }
}

module.exports = BaseFileModel;