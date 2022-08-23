import { AnimateCanvas } from "./Canvas/animate.js";
import { CanvasEvents } from "./Canvas/CanvasEvents.js";
import { rgbProp } from "./Canvas/CanvasTools.js";
import { Paintbrush } from "./Canvas/Paintbrush.js";

const stage = document.getElementById('stage');

/**
 * Resizes the canvas to 3/4 the size of the width or height of the screen
 * depending on which is smaller
 * 
 * @param {number} width 
 * @param {number} height 
 */
function resizeStage(width, height) {
    if (width > height) {
        stage.setAttribute('width', height * 0.75 + 'px');
        stage.setAttribute('height', height * 0.75 + 'px');
    } else {
        stage.setAttribute('width', width * 0.75 + 'px');
        stage.setAttribute('height', width * 0.75 + 'px');
    }
}

//Change the canvas size on window resize
window.addEventListener('resize', () => {
    resizeStage(window.innerWidth, window.innerHeight);
});
resizeStage(window.innerWidth, window.innerHeight);

//Initialize the canvas size
const paintbrush = new Paintbrush(stage, 100, 100);

//Initialize event listeners
const events = new CanvasEvents(stage);

//Initialize animations and the draw function
const stageAnimator = new AnimateCanvas(stage, (ctx, delta) => {
    paintbrush.draw(() => {
        paintbrush.clearStage();
        ctx.fillStyle = rgbProp('55BB66');
        ctx.fillRect(1, 2, 2, 2);
        ctx.fillStyle = rgbProp('1111FF');
        ctx.fillRect(events.x - 5, events.y - 5, 10, 10);
    });
});

//Start the animation
stageAnimator.startAnimation();