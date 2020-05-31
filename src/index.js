import Model from "./Model.js";
import View from "./View.js";
import Controller from "./Controller.js";
import './style.less';

function initialize() {
    const model = new Model(); 
    const view = new View(); 
    const controller = new Controller(model, view);

    controller.init();
}

initialize();