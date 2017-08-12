// @flow

function range(size: number): Array {
    return new Array(size).fill(1).map((_, i) => i);
}

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
    for (let i = 0; i < array.length; i+= size) {
        newArr.push(buildChunk(array, size, i, fillWithUndefined));
    }
    return newArr;
}