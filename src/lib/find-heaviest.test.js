import findHeaviest from './find-heaviest';
import { format as fmt } from './test-helpers';

// TODO: Change weighs to be an array of which indexes were weighed, and which was heavier,
// so it can be rendered
[
    {values: [2, 1, 1], pos: 1, weighs: 1},
    {values: [1, 2, 1], pos: 2, weighs: 1},
    {values: [1, 1, 2], pos: 3, weighs: 1},
    {values: [2, 1, 1, 1, 1, 1], pos: 1, weighs: 2},
    {values: [1, 2, 1, 1, 1, 1], pos: 2, weighs: 2},
    {values: [1, 1, 2, 1, 1, 1], pos: 3, weighs: 2},
    {values: [1, 1, 1, 2, 1, 1], pos: 4, weighs: 2},
    {values: [1, 1, 1, 1, 2, 1], pos: 5, weighs: 2},
    {values: [1, 1, 1, 1, 1, 2], pos: 6, weighs: 2},
    {values: [1, 1, 1, 1, 2, 1, 1, 1, 1], pos: 5, weighs: 2}
].forEach(({ values, pos, weighs }) => {
        test(`findHeaviest(${values.map(fmt).join(', ')}) returns { pos: ${pos}, weighs: ${weighs} }`, () => {
            expect(findHeaviest(values)).toEqual({pos, weighs});
        });
    });