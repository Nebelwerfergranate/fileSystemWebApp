"use strict";

class BaseViewModel {
    constructor(options){
        this.name = "";
        this.type = null;

        this.initialize(options);
    }
    initialize(options){
        if(options.type != null){
            this.type = options.type
        } else{
            throw new Error("option type is required");
        }

        if(options.name != null){
            this.name = options.name;
        }
    }
}

module.exports = BaseViewModel;

