export class AnimateCanvas {

    /**
     * Takes in a draw function and animates the canvas on request
     * 
     * @param {Element} container 
     * @param {function(context, delta): void} draw 
     */
    constructor(container, draw) {
        this.canvas = container;
        this.ctx = container.getContext('2d');
        this.animating = false;
        this.draw = draw;
    }

    startAnimation() {
        let prevTime = 0;
        let delta;
        const step = time => {
            delta = time - prevTime;
            prevTime = time;
            this.draw(this.ctx, delta);
            if (this.animating) {
                window.requestAnimationFrame(step);
            }
        }
        this.animating = true;
        window.requestAnimationFrame(step);
    }

    pauseAnimation() {
        this.animating = true;
    }

}