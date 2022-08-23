import { rgbProp } from "./CanvasTools.js";

export class Paintbrush {

    /**
     * Takes in a canvas object, width and height and
     * supplies a set of functions for drawing on the
     * canvas within the dimentions
     * 
     * @param {Element} canvas
     * @param {number} width 
     * @param {number} height 
     */
    constructor(canvas, width, height) {
        /**
         * Width of the scaled canvas in pixels
         * @type {number}
         */
        this.width = width;

        /**
         * Height of the scaled canvas in pixels
         * @type {number}
         */
        this.height = height;

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
        this.background = 'FFFFFF'; //Base color of the background

        /**
         * The width and height of the canvas obejct
         * @type {Object}
         */
        this.box = {
            width: this.canvas.clientWidth, //Canvas width
            height: this.canvas.clientHeight //Canvas height
        };

        this.scale = {
            x: this.box.width / this.width,
            y: this.box.height / this.height
        }

        //Calculate the box dimensions only on resize to minimize calculations
        window.addEventListener('resize', () => {
            this.box.width = canvas.clientWidth;
            this.box.height = canvas.clientHeight;
            this.scale.x = this.box.width / this.width;
            this.scale.y = this.box.height / this.height;
        });

        this.ctx.scale(1, 1);
    }

    /**
     * Sets the base background color of the screen
     * 
     * @param {String} color 
     */
    set backdrop(color) {
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
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    /**
     * Takes in a draw function and a project instance and draws it on the canvas as
     * if the canvas was scaled to the proper dimensions
     * 
     * @param {function(CanvasRenderingContext2D,any):void} func
     * @param {any} project
     */
    draw(func, project) {
        this.ctx.save();
        this.ctx.scale(this.scale.x, this.scale.y);
        this.clearStage();
        func(this.ctx, project);
        this.ctx.restore();
    }

    /**
     * Returns a point scaled to the canvas
     * 
     * @param {number} x 
     * @param {number} y
     * @returns {object.<x, y>} { x: number, y: number }
     */
    scalePoint(x, y) {
        return { x: this.scaleX(x), y: this.scaleY(y) };
    }

    /**
     * Returns a number scaled by the x scale
     * 
     * @param {number} x 
     * @returns {number}
     */
    scaleX(x) {
        return x / this.scale.x;
    }


    /**
     * Returns a number scaled by the y scale
     * 
     * @param {number} y 
     * @returns {number}
     */
    scaleY(y) {
        return y / this.scale.y;
    }
}