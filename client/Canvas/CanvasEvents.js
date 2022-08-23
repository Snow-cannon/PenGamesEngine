export class CanvasEvents {

    /**
     * Adds event listeners to the canvas object and saves data to specific variables
     * @param {Element} canvas
     */
    constructor(canvas, defaults) {
        this.ctx = canvas.getContext('2d');
        this.mouse = { x: 0, y: 0, down: false }
        this.pressed = {};

        //Get mouse point
        canvas.addEventListener('mousemove', e => {
            let rect = canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left,
                this.mouse.y = e.clientY - rect.top
        });

        //Get mouse click
        canvas.addEventListener('mousedown', e => {
            this.mouse.down = true;
        });

        //Get mouse click
        canvas.addEventListener('mouseup', e => {
            this.mouse.down = false;
        });

        //Get keys pressed
        window.addEventListener('keydown', (e) => {
            if (!defaults.includes(e.key.toLowerCase())) {
                e.preventDefault();
            }
            this.pressed[e.key.toLowerCase()] = true;
        });

        //Remove pressed keys
        window.addEventListener('keyup', (e) => {
            if (!defaults.includes(e.key.toLowerCase())) {
                e.preventDefault();
            }
            delete this.pressed[e.key.toLowerCase()];
        });
    }

    get x() { return this.mouse.x; }
    get y() { return this.mouse.y; }
    get pos() { return [this.mouse.x, this.mouse.y] }
    get click() { return this.mouse.down; }
    get keys() { return this.pressed; }
}