/**
 * Finds the second maximum value in an array with two separate traversals.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} The second maximum value in the array.
 * @throws {Error} If the array has less than two unique elements.
 *
 * @example
 * const arr = [9, 2, 3, 6];
 * findSecondMaximum(arr); // Returns 6
 *
 * @timeComplexity O(n) - Two separate traversals over the array.
 * @spaceComplexity O(1) - Only variables used, no extra space needed.
 */
function findSecondMaximum(arr: number[]): number {
    if (arr.length < 2) {
        throw new Error(
            'Input array will contain at least two unique elements.',
        );
    }

    let max = Number.NEGATIVE_INFINITY;
    let secondMax = Number.NEGATIVE_INFINITY;

    // First traversal: find the maximum value
    for (let element of arr) {
        if (element > max) {
            max = element;
        }
    }

    // Second traversal: find the second maximum value
    for (let element of arr) {
        if (element < max && element > secondMax) {
            secondMax = element;
        }
    }

    return secondMax;
}

console.log(findSecondMaximum([9, 2, 3, 6]));

/**
 * Finds the second maximum value in an array with a single traversal.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} The second maximum value in the array.
 * @throws {Error} If the array has less than two unique elements.
 *
 * @example
 * const arr = [9, 2, 3, 6];
 * findSecondMaximumOneTraversal(arr); // Returns 6
 *
 * @timeComplexity O(n) - Single traversal of the array.
 * @spaceComplexity O(1) - Only variables used, no extra space needed.
 */
function findSecondMaximumOneTraversal(arr: number[]): number {
    let max = Number.NEGATIVE_INFINITY;
    let secondMax = Number.NEGATIVE_INFINITY;

    // Single traversal to find max and second max
    for (let element of arr) {
        if (element > max) {
            secondMax = max;
            max = element;
        } else if (element > secondMax && element !== max) {
            secondMax = element;
        }
    }

    return secondMax;
}
