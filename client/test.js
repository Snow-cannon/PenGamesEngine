/**
 * Testing file
 */

import { randomElem } from './Utils.js';
import { distance } from './Objects/Graph.js';

/**
 * Random element property test
 */
const arr = [1, 2];
let results = { '1': 0, '2': 0 };
for (let i = 0; i < 100; ++i) {
    results[randomElem(arr)] += 1;
}
console.assert(results['1'] > 0);
console.assert(results['2'] > 0);

//Distance
console.assert(distance(5, 0, 0, 0) === 5);
console.assert(distance(0, 4, 0, 0) === 4);
console.assert(distance(0, 0, 3, 0) === 3);
console.assert(distance(0, 0, 0, 2) === 2);