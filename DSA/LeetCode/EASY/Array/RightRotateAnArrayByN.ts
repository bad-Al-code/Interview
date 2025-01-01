/**
 * Rotates an array to the right by a specified number of elements (manual approach).
 *
 * @param {number[]} arr - The input array to be rotated.
 * @param {number} n - The number of positions to rotate the array to the right.
 * @returns {number[]} A new array with the elements rotated.
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const rotatedArr = rightRotateManual(arr, 2);
 * Outputs: [4, 5, 1, 2, 3]
 *
 * @logic
 * This function manually rotates the array by first appending the last `n` elements of the array to the front,
 * followed by the remaining elements.
 *
 * @timeComplexity O(n) - Linear time complexity as we iterate over the array twice.
 * @spaceComplexity O(n) - A new array of the same size as the input array is created.
 */
function rightRotateManual(arr: number[], n: number): number[] {
    const rotatedList: number[] = [];

    for (let item = arr.length - n; item < arr.length; item++) {
        rotatedList.push(arr[item]);
    }

    for (let item = 0; item < arr.length - n; item++) {
        rotatedList.push(arr[item]);
    }
    return rotatedList;
}

/**
 * Rotates an array to the right by a specified number of elements (using splice and concat).
 *
 * @param {number[]} arr - The input array to be rotated.
 * @param {number} n - The number of positions to rotate the array to the right.
 * @returns {number[]} A new array with the elements rotated.
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const rotatedArr = rightRotate(arr, 2);
 * Outputs: [4, 5, 1, 2, 3]
 *
 * @logic
 * This function uses `splice` to split the array into two parts: the last `n` elements and the first `arr.length - n` elements.
 * The two parts are then concatenated to form the rotated array.
 *
 * @timeComplexity O(n) - Splice and concat operations each iterate over the array.
 * @spaceComplexity O(n) - A new array is created for the rotated result.
 */
function rightRotate(arr: number[], n: number): number[] {
    return arr.splice(0, arr.length - n).concat(arr);
}

/**
 * Rotates an array to the right by a specified number of elements (optimized in-place rotation).
 *
 * @param {number[]} arr - The input array to be rotated.
 * @param {number} n - The number of positions to rotate the array to the right.
 * @returns {number[]} The input array itself after the rotation (modified in place).
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * rightRotateOptimized(arr, 2);
 * console.log(arr); // Outputs: [4, 5, 1, 2, 3]
 *
 * @logic
 * This function rotates the array in-place by reversing the entire array, reversing the first `n` elements,
 * and then reversing the remaining elements. This approach ensures no additional space is used other than constant space
 * for the index manipulation.
 *
 * @timeComplexity O(n) - Reversals of the array sections take linear time.
 * @spaceComplexity O(1) - The array is modified in place with no extra space allocated.
 */
function rightRotateOptimized(arr: number[], n: number): number[] {
    const reverse = (start: number, end: number) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
            start++;
            end--;
        }
    };

    n = n % arr.length;

    reverse(0, arr.length - 1);
    reverse(0, n - 1);
    reverse(n, arr.length - 1);

    return arr;
}
