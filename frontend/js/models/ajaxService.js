"use strict";

class AjaxService{
    constructor(){

    }

    static get(url, options){
        if(typeof options.success !== "function"){
            throw new Error("option.success is not a function");
        }

        var xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.send();

        xhr.onload = () => {
            if (xhr.status != 200) {
                if(typeof options.fail === "function"){
                    options.fail(xhr.status + ': ' + xhr.statusText);
                }
            } else {
                options.success(JSON.parse(xhr.responseText));
            }
        };

        xhr.onerror = () => {
            if(typeof options.error === "function"){
                options.error();
            }
        }
    }
}

module.exports = AjaxService;