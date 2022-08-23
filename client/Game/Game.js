import { CanvasEvents } from "../Canvas/CanvasEvents.js";
import { Paintbrush } from "../Canvas/Paintbrush.js";

export class Game {

    constructor(canvas, width, height) {

        /** @type {object} */
        this.project = {
            render: (ctx, s) => { },
            update: (d, m, k, s) => { }
        };

        /** @type {number} */
        this.running = 0;

        /** @type {number} */
        this.width = width;

        /** @type {number} */
        this.height = height;

        /** @type {Paintbrush} */
        this.paintbrush = new Paintbrush(canvas, width, height);

        /** @type {CanvasEvents} */
        this.events = new CanvasEvents(canvas, ['f12', 'alt', 'r']);
    }

    get box() { return { width: this.width, height: this.height }; }
    get brush() { return this.paintbrush; }
    get mouse() {
        return {
            x: this.brush.scaleX(this.events.x),
            y: this.brush.scaleY(this.events.y),
            click: this.events.click
        };
    }
    get keys() { return this.events.pressed; }

    /**
     * Starts the game
     */
    begin() {
        let prevTime = Date.now();
        const self = this;
        this.running = setInterval(() => {
            let now = Date.now();
            let delta = now - prevTime;
            prevTime = now;
            self.project.update(delta, self.mouse, self.keys, self.project);
            self.render();
        }, 0);
    }

    /**
     * Stops the game
     */
    stop() {
        clearInterval(this.running);
    }

    /**
     * Calls the rendering function and draws the game to the canvas
     * @param {CanvasRenderingContext2D} ctx 
     */
    render(ctx) {
        this.paintbrush.draw(this.project.render, this.project);
    }

    setProject(project) {
        this.project = project;
    }

    clearProject() {
        this.project = {
            render: (ctx, s) => { },
            update: (d, m, k, s) => { }
        };
    }

}