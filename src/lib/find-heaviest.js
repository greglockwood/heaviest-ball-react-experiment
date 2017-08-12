// @flow

import compare from './compare';
import chunk from './chunk';

function compareWeights(a, b) {
    return compare(a, b, weightValue);
}

function weightValue(a):number {
    return value(a) * -1;
}

function value(a):number {
    return Array.isArray(a) ? a.reduce((sum, n) => sum + n, 0) : a;
}

function size(x):number {
    return Array.isArray(x) ? x.length : 1;
}

function heaviest(a, b, c, startPos = 0, weighs = 0):{ pos: number, weighs: number } {
    const cmp = compareWeights(a, b);
    const result = (val, relPos) => {
        const sz = size(val);
        const pos = startPos + ((relPos - 1) * sz);
        return sz === 1
            ? {pos: startPos + relPos, weighs: weighs + 1}
            : heaviest(...chunk(val, 3), pos, weighs + 1);
    };
    if (cmp === 0) {
        return result(c, 3);
    } else if (cmp < 0) {
        return result(a, 1);
    }
    return result(b, 2);
}

export default function findHeaviest(weights: Array<number>):{ pos: number, weighs: number } {
    return heaviest(...chunk(weights, 3));
}