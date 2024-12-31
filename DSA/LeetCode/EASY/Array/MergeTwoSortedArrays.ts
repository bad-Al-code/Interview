/**
 * Merge two sorted arrays into another sorted array.
 *
 * @param {number[]} arr1 The first sorted array
 * @param {number[]} arr2 The seconf sorted array
 * @returns {number[]} A new sorted array containing all elements form both input arryas
 *
 * @example
 * const arr1 = [1, 3, 4, 5];
 * const arr2 = [2, 6, 7, 8];
 * mergeArrays(arr1, arr2); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
 */

/**
 *  * @timeComplexity O(nlogn) we are sorting
 */
function mergeArrays(arr1: number[], arr2: number[]): number[] {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

/**
 * merge both arrays using two pointers and after that add remainging element
 * @timeComplexity O(m+n) m and n are the length of arr1 and arr2 respectively.
 */
function optimizeMergeArrays(arr1: number[], arr2: number[]): number[] {
    let result = [];
    let i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    if (i < arr1.length) {
        result = result.concat(arr1.slice(i));
    } else if (j < arr2.length) {
        result = result.concat(arr2.slice(i));
    }

    return result;
}

const arr1 = [1, 3, 4, 5];
const arr2 = [2, 6, 7, 8];

console.log(`SortedArray (Merge & Sort): ${mergeArrays(arr1, arr2)}`);
console.log(
    `SortedArray (Optimized Merge): ${optimizeMergeArrays(arr1, arr2)}`,
);
