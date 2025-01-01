/**
 * Find the smallest number in an array.
 *
 * @param {number[]} arr - Input array
 * @returns {number} Returns the minimum value in input array.
 *
 * @throws {Error} If array size is 0, throw an error
 *
 * @example
 *  const arr = [3, 1, 4, 1, 5];
 * const min = findMinOptimized(arr);
 *
 * @timeComplexity: O(n), iterate over the input array
 * @spaceComplexity: O(1)
 */
function findMinimum(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error('Array must be not empty');
    }

    let minimum = arr[0];
    for (let element of arr) {
        if (arr[element] < minimum) {
            minimum = arr[element];
        }
    }

    return minimum;
}

const arr1 = [3, 1, 4, 1, 5];
console.log(`Brute Force Min: ${findMinimum(arr1)}`);
