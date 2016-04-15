"use strict";

var Component = require("./component.js");
var FileSystem = require("./fileSystem");

class Page extends Component{
    constructor(options){
        super(options);

        this._fsComponent = new FileSystem({
            element: document.querySelector('[data-component="fileSystem"]')
        });
    }
}

module.exports = Page;