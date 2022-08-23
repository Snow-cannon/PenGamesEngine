/**
 * Testing file
 */

import { randomElem } from './Utils.js';

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