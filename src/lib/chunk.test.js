import chunk from './chunk';

describe('chunk()', () => {
    it('should return identical array if size = array length', () => {
        expect(chunk([1, 2, 3], 3)).toEqual([1, 2, 3]);
    });

    it('should return equal sized chunks when array length is multiple of size', () => {
        expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });

    it('should return an array with unfilled slots = undefined if size > array.length', () => {
        expect(chunk([1,2], 3)).toEqual([1,2, undefined]);
    });

    it('should fill empty spots with undefined if even split not possible', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5, undefined]]);
    });

    it('should not fill empty spots with undefined if last parameter is false', () => {
        expect(chunk([1, 2, 3, 4, 5], 3, false)).toEqual([[1, 2, 3], [4, 5]]);
    });
});