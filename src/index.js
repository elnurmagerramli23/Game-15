let Model = require("./Model.js");
let View = require("./View.js");
let Controller = require("./Controller.js");

function initialize() {
    const view = new View(); 
    const model = new Model(); 
    const controller = new Controller(model, view);

    controller.init();
}

initialize();