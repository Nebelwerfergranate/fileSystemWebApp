"use strict";

var Component = require("./component.js");
var AjaxService = require("./../models/ajaxService");
var templateFunction = require("./../../templates/folder-template.hbs");
var fileTypes = require("./../../../shared/enums/fileTypes");

class FileSystem extends Component{
    constructor(options){
        super(options);
        this._container = null;
        this._onclickHandler = this._onclickHandler.bind(this);

        this._loadFolder(0);
    }

    _render(folder) {
        this._el.innerHTML = templateFunction({
            name: folder.name,
            content: folder.content,
            parentPathNumber: folder.parentPathNumber,
            type: folder.type
        });
    }

    _loadFolder(pathNumber){
        var options = {
            success: this._onSuccessHandler.bind(this),
            fail: function(message){
                alert(message);
            },
            error: function(){
                alert("Something went wrong...");
            }
        };

        var url = `/getFolder/${pathNumber}`;
        AjaxService.get(url, options);
    }

    _onSuccessHandler(data){
        this._render(data);
        this._container = document.querySelector('[data-selector="filesystem-content"]');
        this._container.addEventListener('click', this._onclickHandler);
    }

    _onclickHandler(event){
        if(event.target.getAttribute("data-selector") !== "filesystem-content-item"){
            return;
        }

        var type = event.target.getAttribute("data-type");

        if(type == null){
            throw new Error("data-type attribute has no value");
        }
        type = Number.parseInt(type);

        if(type !== fileTypes.folder){
            return;
        }

        var pathNumber = event.target.getAttribute("data-path-number");

        if(pathNumber == null){
            throw new Error("data-path-number attribute has no value;");
        }

        this._container.removeEventListener('click', this._onclickHandler);
        this._loadFolder(pathNumber);
    }
}

module.exports = FileSystem;