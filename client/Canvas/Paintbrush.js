import { rgbProp } from "./CanvasTools.js";

export class Paintbrush {

    /**
     * Takes in a canvas object and supplies additional
     * 
     * @param {Element} canvas 
     */
    constructor(canvas) {
        /**
         * The canvas being modified
         * @type {Element}
        */
        this.canvas = canvas;

        /**
         * Context of the rendering canvas
         * @type {CanvasRenderingContext2D}
         */
        this.ctx = canvas.getContext('2d');

        /**
         * Background color of the canvas
         * @type {string}
         */
        this.background = 'FFFFFF'; //Base clor of the background

        /**
         * The width and height of the canvas obejct
         * @type {Object}
         */
        this.box = {
            width: this.canvas.clientWidth, //Canvas width
            height: this.canvas.clientHeight //Canvas height
        };

        //Calculate the box dimensions only on resize to minimize calculations
        window.addEventListener('resize', () => {
            this.box.width = canvas.clientWidth;
            this.box.height = canvas.clientHeight;
        });

        this.ctx.scale(1, 1);
    }

    /**
     * Sets the base background color of the screen
     * 
     * @param {String} color 
     */
    setBackgroundColor(color) {
        this.background = color;
    }

    /**
     * Fills the canvas with the input color or the background color
     * 
     * @param {String} color
     */
    clearStage(color) {
        if (color) {
            this.ctx.fillStyle = rgbProp(color);
        } else {
            this.ctx.fillStyle = rgbProp(this.background);
        }
        this.ctx.fillRect(0, 0, this.box.width, this.box.height);
    }

}