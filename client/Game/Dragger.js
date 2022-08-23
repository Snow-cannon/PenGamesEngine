import { distance } from "../Objects/Graph.js";
import { circle, line, rect } from "../Objects/Shape.js";

class Dragger {

    constructor() {
        this.header = '';
        this.pointer = { x: 0, y: 0, blue: false };
        this.hoverPoint = { x: 50, y: 50 };
    }

    /**
     * Updates the project by one tick
     * @param {number} delta 
     * @param {Object} mouse 
     * @param {number} mouse.x 
     * @param {number} mouse.y 
     * @param {boolean} mouse.down 
     * @param {Object} keys 
     */
    _update(delta, mouse, keys, self) {
        self.pointer.x = mouse.x;
        self.pointer.y = mouse.y;
        self.pointer.blue = mouse.click;
    }

    /**
     * Renders the proejct
     * @param {CanvasRenderingContext2D} ctx 
     */
    _render(ctx, self) {
        line(ctx, 0, 0, self.pointer.x, self.pointer.y, '00FF00', 2);
        rect(ctx, self.pointer.x - 5, self.pointer.y - 5, 10, 10, '000000', 1, self.pointer.blue ? '222222' : '222222', 45);
    }

    get update() { return this._update; }
    get render() { return this._render; }

}

export const dragger = new Dragger();