/**
 * Converts a hex code to an rgb object
 * 
 * @param {String} hex 
 */
function hexToRGB(hex) {
    //Get hex values
    let rgb = {
        r: Number(`0x${hex.substring(0, 2)}`),
        g: Number(`0x${hex.substring(2, 4)}`),
        b: Number(`0x${hex.substring(4, 6)}`),
    }
    //Convert NaN values to 0
    for (const k in rgb) {
        rgb[k] = isNaN(rgb[k]) ? 0 : rgb[k];
    }
    return rgb;
}

/**
 * Converts hex into the rgb css property
 * 
 * @param {String} rgb
 */
export function rgbProp(color) {
    let rgb = hexToRGB(color);
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}