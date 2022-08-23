import { AnimateCanvas } from "./Canvas/animate.js";
import { Paintbrush } from "./Canvas/Paintbrush.js";
import { randomElem } from './Utils.js';

const stage = document.getElementById('stage');

function resizeStage(width, height) {
    if (width > height) {
        stage.setAttribute('width', height * 0.75 + 'px');
        stage.setAttribute('height', height * 0.75 + 'px');
    } else {
        stage.setAttribute('width', width * 0.75 + 'px');
        stage.setAttribute('height', width * 0.75 + 'px');
    }
}

window.addEventListener('resize', () => {
    resizeStage(window.innerWidth, window.innerHeight);
});

resizeStage(window.innerWidth, window.innerHeight);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

const paintbrush = new Paintbrush(stage);
const stageAnimator = new AnimateCanvas(stage, (ctx, delta) => {
});
stageAnimator.startAnimation();