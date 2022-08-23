/**
 * Takes in an array and returns a random element
 * 
 * @param {any[]} arr
 */
export function randomElem(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}