import findHeaviest from './find-heaviest';
import { format as fmt } from './test-helpers';

// TODO: Change weighs to be an array of which indexes were weighed, and which was heavier,
// so it can be rendered
[
    {values: [2, 1, 1], heaviest: 0, steps: [{left: [0], right: [1], balance: -1}]},
    {values: [1, 2, 1], heaviest: 1, steps: [{left: [0], right: [1], balance: 1}]},
    {values: [1, 1, 2], heaviest: 2, steps: [{left: [0], right: [1], balance: 0}]},
    {
        values: [2, 1, 1, 1, 1, 1],
        heaviest: 0,
        steps: [{left: [0, 1], right: [2, 3], balance: -1}, {left: [0], right: [1], balance: -1}]
    },
    {
        values: [1, 2, 1, 1, 1, 1],
        heaviest: 1,
        steps: [{left: [0, 1], right: [2, 3], balance: -1}, {left: [0], right: [1], balance: 1}]
    },
    {
        values: [1, 1, 2, 1, 1, 1],
        heaviest: 2,
        steps: [{left: [0, 1], right: [2, 3], balance: 1}, {left: [2], right: [3], balance: -1}]
    },
    {
        values: [1, 1, 1, 2, 1, 1],
        heaviest: 3,
        steps: [{left: [0, 1], right: [2, 3], balance: 1}, {left: [2], right: [3], balance: 1}]
    },
    {
        values: [1, 1, 1, 1, 2, 1, 1, 1, 1],
        heaviest: 4,
        steps: [{left: [0, 1, 2], right: [3, 4, 5], balance: 1}, {left: [3], right: [4], balance: 1}]
    },
    //{
    //    values: [1,1,1,1,1,1,1,1,1,2],
    //    heaviest: 9,
    //}
    // TODO: Test case for 7 items, last ball heaviest - only needs 1 step
].forEach(({ values, heaviest, steps }) => {
        describe(`findHeaviest(${values.map(fmt).join(', ')})`, () => {
            let actualHeaviest, actualSteps;
            beforeEach(() => {
                let result = findHeaviest(values);
                actualHeaviest = result.heaviest;
                actualSteps = result.steps;
            });

            it(`returns heaviest index of ${heaviest}`, () => {
                expect(actualHeaviest).toEqual(heaviest);
            });

            steps.forEach(({ left, right, balance }, index) => {
                it(`should have step #${index + 1} = { left: ${fmt(left)}, right: ${fmt(right)}, balance:${balance} }`, () => {
                    expect(actualSteps[index]).toEqual({left, right, balance});
                });
            });
        });
    });