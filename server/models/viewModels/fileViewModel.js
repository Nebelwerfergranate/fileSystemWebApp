"use strict";

var BaseViewModel = require("./baseViewModel");
var fileTypes = require("../../../shared/enums/fileTypes");

class fileViewModel extends BaseViewModel{
    constructor(options){
        options.type = fileTypes.file;
        super(options);
    }
}

module.exports = fileViewModel;