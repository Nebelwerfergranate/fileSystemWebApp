"use strict";

class BaseViewModel {
    constructor(options){
        this._name = "";
        this._type = null;

        this._initialize(options);
    }

    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }

    get type(){
        return this._type;
    }

    _initialize(options){
        if(options.type != null){
            this._type = options.type
        } else{
            throw new Error("option type is required");
        }

        if(options.name != null){
            this._name = options.name;
        }
    }
}

module.exports = BaseViewModel;

