type MultidimensionalArray = (MultidimensionalArray | number)[];

function* inorderTraversal(
    arr: MultidimensionalArray,
): Generator<number, void, unknown> {
    const stack: (MultidimensionalArray | number)[] = [...arr].reverse();

    while (stack.length > 0) {
        const top = stack.pop();

        if (typeof top === 'number') {
            yield top;
        } else {
            stack.push(...top!.reverse());
        }
    }
}

export const testCases: MultidimensionalArray[] = [
    [1, [2, 3]],
    [[1, 1], 2, [1, 1]],
    [1, [4, [6]]],
    [[]],
    [10, [20, [30, [40]]]],
];

testCases.forEach((test, index) => {
    console.log(`Test Case ${index + 1}:`, [...inorderTraversal(test)]);
    console.log('='.repeat(100));
});
