"use strict";

var Component = require("./component.js");

class FileSystem extends Component{
    constructor(options){
        super(options);
        //alert("hello from fs!");
        this._loadFolder(0);
    }

    _loadFolder(pathNumber){
        var xhr = new XMLHttpRequest();

        xhr.open('GET', `/getFolder/${pathNumber}`, true);

        xhr.send();

        xhr.onload = () => {
            if (xhr.status != 200) {
                alert( xhr.status + ': ' + xhr.statusText );
            } else {
                this._el.innerHTML = xhr.responseText;
                //var folder = JSON.parse(xhr.responseText);
            }
        };
    }
}

module.exports = FileSystem;