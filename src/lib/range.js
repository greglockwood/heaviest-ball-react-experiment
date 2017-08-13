// @flow

export default function range(startOrSize: number, end?: number): Array {
    const size = end === undefined ? startOrSize : (end - startOrSize + 1);
    const start = end === undefined ? 0 : startOrSize;
    return new Array(size).fill(1).map((_, i) => start + i);
}