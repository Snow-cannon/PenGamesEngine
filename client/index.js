import { dragger } from "./Game/Dragger.js";
import { Game } from "./Game/Game.js";

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
    if(stage.clientWidth < 100){ stage.setAttribute('width', '100px'); }
    if(stage.clientHeight < 100){ stage.setAttribute('height', '100px'); }
}

//Change the canvas size on window resize
window.addEventListener('resize', () => {
    resizeStage(window.innerWidth, window.innerHeight);
});
resizeStage(window.innerWidth, window.innerHeight);

let game = new Game(stage, 100, 100);
game.setProject(dragger);
game.begin();