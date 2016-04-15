"use strict";

class BaseFileModel{
    constructor(options){
        this._name = "";
        this._path = "";
        this._type = "";
        this._parentPathNumber = 0;

        this._initialize(options);
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

    get type(){
        return this._type;
    }


    get parentPathNumber(){
        return this._parentPathNumber;
    }
    set parentPathNumber(value){
        this._parentPathNumber = value;
    }

    _initialize(options){
        if(options.name != null){
            this._name = options.name;
        }

        if(options.path != null) {
            this._path = options.path;
        }

        if(options.parentPathNumber != null){
            this._parentPathNumber = options.parentPathNumber;
        }
    }
}

module.exports = BaseFileModel;