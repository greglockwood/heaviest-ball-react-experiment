import compare from './compare';
import { format as fmt } from './test-helpers';

describe('compare()', () => {
    describe('with no valueFn (uses identity function)', () => {
        it('should return 0 when passed two identical numbers', () => {
            expect(compare(1, 1)).toBe(0);
        });

        it('should return < 0 when first number is lesser', () => {
            expect(compare(1, 2)).toBeLessThan(0);
        });

        it('should return > 0 when second number is greater', () => {
            expect(compare(2, 1)).toBeGreaterThan(0);
        });
    });

    describe('with valueFn that negates numbers', () => {
        const negate = n => n * -1;
        it('should return 0 when passed two identical numbers', () => {
            expect(compare(5, 5, negate)).toBe(0);
        });

        it('should return < 0 when first number is greater', () => {
            expect(compare(2, 1, negate)).toBeLessThan(0);
        });

        it('should return > 0 when second number is greater', () => {
            expect(compare(1, 2, negate)).toBeGreaterThan(0);
        });
    });

    describe('with a valueFn that sums arrays or returns value if not array', () => {
        const value = x => Array.isArray(x) ? x.reduce((sum, n) => sum + n, 0) : x;
        it('should return 0 when passed two identical numbers', () => {
            expect(compare(1, 1, value)).toBe(0);
        });

        it('should return 0 when passed a number and an array with equal values', () => {
            expect(compare([1, 1], 2, value)).toBe(0);
        });

        it('should return 0 when passed two arrays whose sums are the same', () => {
            expect(compare([1, 2], [1, 1, 1, 0], value)).toBe(0);
        });

        [
            [1, 2],
            [[1], [1, 1]],
            [1, [1, 1]]
        ].forEach(([a, b]) => {
                it(`should return < 0 when called like compare(${fmt(a)}, ${fmt(b)}, value)`, () => {
                    expect(compare(a, b, value)).toBeLessThan(0);
                });
            });

        [
            [2, 1],
            [[1, 1, 1], 2],
            [[1, 1, 1], [1, 1]],
            [3, [1, 1]]
        ].forEach(([a,b]) => {
                it(`should return > 0 when called like compare(${fmt(a)}, ${fmt(b)}, value)`, () => {
                    expect(compare(a, b, value)).toBeGreaterThan(0);
                });
            });
    });
});
