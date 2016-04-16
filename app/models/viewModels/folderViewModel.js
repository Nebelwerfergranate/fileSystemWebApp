"use strict";

var BaseViewModel = require("./baseViewModel");
var fileTypes = require("../../../shared/enums/fileTypes");

class folderViewModel extends BaseViewModel{
    constructor(options){
        options.type = fileTypes.folder;
        super(options);

        this.parentPathNumber = 0;
        this.content = [];

        this.initialize(options);
    }

    initialize(options){
        super.initialize(options);

        if(options.parentPathNumber != null){
            this.parentPathNumber = options.parentPathNumber;
        }
    }
}

module.exports = folderViewModel;