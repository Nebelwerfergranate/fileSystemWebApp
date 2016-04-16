"use strict";

var BaseViewModel = require("./baseViewModel");
var fileTypes = require("../../../shared/enums/fileTypes");

class ContentItemViewModel extends BaseViewModel{
    constructor(options){
        options.type = fileTypes.folder;
        super(options);

        this.pathNumber = 0;

        this.initialize(options);
    }

    initialize(options){
        super.initialize(options);

        if(options.pathNumber != null){
            this.pathNumber = options.pathNumber;
        }
    }
}

module.exports = ContentItemViewModel;