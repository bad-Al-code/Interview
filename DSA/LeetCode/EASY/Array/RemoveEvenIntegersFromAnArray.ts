/**
 * Removes all even elements from the input array and returns an array containing only odd integers.
 * @param {number[]} arr - An array of random integers.
 * @returns {number[]} An array containing only the odd integers from the input array.
 *
 * @example
 * @input
 * const inputArray = [1, 2, 4, 5, 10, 6, 3];
 *
 * @output
 * [1, 5, 3]
 */

/**
 * @logic use result array, and push only odd element into the result array
 * @timeeComplexity: O(n)
 * @spaceComplexity: O(n), using an array of size n
 */
function removeEven(arr: number[]): number[] {
    const result = [];
    for (let element of arr) {
        if (element % 2 !== 0) {
            result.push(element);
        }
    }

    return result;
}

/**
 * @logic instead of using another aray modify the arra in-place, use a pointer that remoes even number and reduce
 * the size of length of array
 * @timeeComplexity: O(n)
 * @spaceComplexity: O(1)
 */
function optimizedRemoveEven(arr: number[]): number[] {
    let index = 0;
    for (let element of arr) {
        if (arr[element] % 2 !== 0) {
            arr[index] = arr[element];
            index++;
        }
    }

    arr.length = index;

    return arr;
}

const inputArray = [1, 2, 4, 5, 10, 6, 3];
console.log(`Output (Unoptimized): [${removeEven(inputArray)}]`);

const inputArrayOptimized = [1, 2, 4, 5, 10, 6, 3];
console.log(
    `Output (Optimized): [${optimizedRemoveEven(inputArrayOptimized)}]`,
);
