export class CanvasEvents {

    /**
     * Adds event listeners to the canvas object and saves data to specific variables
     * @param {Element} canvas
     */
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.mouse = { x: 0, y: 0 }
        canvas.addEventListener('mousemove', e => {
            let rect = canvas.getBoundingClientRect();
            this.mouse = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            }
        });
    }

    get x() { return this.mouse.x; }
    get y() { return this.mouse.y; }

}