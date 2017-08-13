// @flow

import range from './range';

function buildChunk(array: Array<any>, size: number, startIndex, fillWithUndefined: boolean): Array<any> {
    return fillWithUndefined
        ? range(size).map(index => array[startIndex + index])
        : array.slice(startIndex, startIndex + size);
}

export default function chunk(array: Array<any>, size: number, fillWithUndefined: boolean = true): Array<Array> {
    if (size >= array.length) {
        return [...buildChunk(array, size, 0, fillWithUndefined)];
    }
    const newArr = [];
    const maxChunkSize = Math.ceil(array.length / size);
    for (let i = 0; i < array.length; i+= maxChunkSize) {
        newArr.push(buildChunk(array, maxChunkSize, i, fillWithUndefined));
    }
    return newArr;
}