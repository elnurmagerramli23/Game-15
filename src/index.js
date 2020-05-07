import "./Model.js";
import "./View.js";
import "./Controller.js";
import './style.less';

function initialize() {
    const model = new Model(); 
    const view = new View(); 
    const controller = new Controller(model, view);

    controller.init();
}

initialize();