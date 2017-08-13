// @flow

import compare from './compare';
import chunk from './chunk';
import range from './range';

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

function castArray(x): Array {
    return Array.isArray(x) ? x : [x];
}

function heaviest(array, a, b, c, startPos = 0, steps = []):{ heaviest: number, steps: Array } {
    const cmp = compareWeights(a, b);
    const result = (val, relPos) => {
        const sz = size(val);
        const pos = startPos + (relPos * sz);
        const step = { left: range(startPos, startPos + size(a) - 1), right: range(startPos + sz, startPos + sz + size(b) - 1), balance: cmp};
        return sz === 1
            ? {heaviest: startPos + relPos, steps: [...steps, step]}
            : heaviest(array, ...chunk(val, 3), pos, [...steps, step]);
    };
    if (cmp === 0) {
        return result(c, 2);
    } else if (cmp < 0) {
        return result(a, 0);
    }
    return result(b, 1);
}

export default function findHeaviest(weights: Array<number>):{ pos: number, weighs: number } {
    return heaviest(weights, ...chunk(weights, 3));
}