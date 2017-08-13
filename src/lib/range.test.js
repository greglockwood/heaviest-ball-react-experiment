import range from './range';
import { format as fmt } from './test-helpers';

describe('range() with single argument', () => {
    it('should return an array of given size and values [0, ..., size - 1]', () => {
        expect(range(3)).toEqual([0,1,2]);
    });
});

describe('range() with 2 arguments', () => {
    it('should return an array from start to end', () => {
        expect(range(1, 3)).toEqual([1,2,3]);
    });
    it('should handle starting from 0', () => {
        expect(range(0, 2)).toEqual([0,1,2]);
    });
});
