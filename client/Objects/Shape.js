import { rgbProp } from "../Canvas/CanvasTools.js";

/**
* Draws a circle with the designated data
* @param {CanvasRenderingContext2D} ctx 
*/
export function circle(ctx, x, y, radius, stroke, strokeWidth, fill) {
    ctx.beginPath();
    ctx.strokeStyle = rgbProp(stroke);
    ctx.lineWidth = strokeWidth;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    if (fill) {
        ctx.fillStyle = rgbProp(fill);
        ctx.fill();
    }
    ctx.stroke();
}

/**
 * Renders a rectangle
 * @param {CanvasRenderingContext2D} ctx 
 */
export function rect(ctx, x, y, width, height, stroke, strokeWidth, fill, dir) {
    ctx.save();
    let rads = dir * Math.PI / 180;
    ctx.rotate(rads);
    ctx.translate(x + width / 2, y + height / 2)
    ctx.strokeStyle = rgbProp(stroke);
    ctx.lineWidth = strokeWidth;
    if (fill) {
        ctx.fillStyle = rgbProp(fill);
        ctx.fillRect(- (width / 2), - (height / 2), width, height);
    } else {
        ctx.strokeRect(- (width / 2), - (height / 2), width, height);
    }
    ctx.restore();
}

/**
 * Draws a line
 * @param {CanvasRenderingContext2D} ctx 
 */
export function line(ctx, x, y, x2, y2, stroke, strokeWidth) {
    ctx.strokeStyle = rgbProp(stroke);
    ctx.lineWidth = strokeWidth;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

/**
 * Draws an ellipse with the designated data
 * @param {CanvasRenderingContext2D} ctx  
 */
export function ellipse(ctx, x, y, xr, yr, dir, stroke, strokeWidth, fill) {
    ctx.beginPath();
    ctx.strokeStyle = rgbProp(stroke);
    ctx.lineWidth = strokeWidth;
    ctx.ellipse(x, y, xr, yr, dir, 0, Math.PI * 2);
    if (this.fill) {
        ctx.fillStyle = rgbProp(fill);
        ctx.fill();
    }
    ctx.stroke();
}