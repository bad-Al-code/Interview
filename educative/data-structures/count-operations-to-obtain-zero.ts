/**
 * @param num1 The first non-negative integer.
 * @param num2 The second non-negative integer.
 * @returns The total number of operations required.
 */
function countOperations(num1: number, num2: number): number {
    if (num1 === 0 || num2 === 0) {
        return 0;
    }

    let currNum1 = num1;
    let currNum2 = num2;
    let count = 0;

    while (currNum1 > 0 && currNum2 > 0) {
        let step: number;

        if (currNum1 >= currNum2) {
            const [ops, newNum1] = performCheckOperation(currNum1, currNum2);

            step = ops;
            currNum1 = newNum1;
        } else {
            const [ops, newNum2] = performCheckOperation(currNum2, currNum1);
            step = ops;
            currNum2 = newNum2;
        }

        count += step;
    }

    return count;
}

/**
 * @param larger The larger of the two numbers.
 * @param smaller The smaller of the two numbers.
 * @returns A tuple containing [number of operations performed, the new value for the larger number].
 */
function performCheckOperation(
    larger: number,
    smaller: number,
): [number, number] {
    if (smaller === 0) {
        return [0, larger];
    }

    const operations = Math.floor(larger / smaller);
    const newLarger = larger % smaller;

    return [operations, newLarger];
}

let num1 = 2,
    num2 = 3;

console.log(countOperations(num1, num2));
