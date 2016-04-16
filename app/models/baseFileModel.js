"use strict";

class BaseFileModel{
    constructor(options){
        this._type = null;
        this._name = "";
        this._path = "";
        this._parentPathNumber = 0;

        this._initialize(options);
    }

    get type(){
        return this._type;
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

    get parentPathNumber(){
        return this._parentPathNumber;
    }
    set parentPathNumber(value){
        this._parentPathNumber = value;
    }

    _initialize(options){
        if(options.type != null){
            this._type = options.type
        } else{
            throw new Error("type is not defined");
        }

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