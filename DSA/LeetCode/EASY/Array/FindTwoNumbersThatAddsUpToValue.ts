/**
 * implement the findSum(arr, value) function, which takes an array arr, a number and value as input and returns an array of two numbers that add up to value
 * @param {number[]} arr input arrray
 * @param {number} value a target umber
 * @returns {number[]} an array of two numbers that add up to value
 *
 * @example
 * arr = [1,21,3,14,5,60,7,6]
 * value = 81
 */

/**
 * traverse the whole array and check f of two elemens add up to the given number .
 * @timeComplexity: O(n^2), we iterate n times over the entire array if lenth n
 */
function findSum(arr: number[], value: number): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === value) {
                return [arr[i], arr[j]];
            }
        }
    }
    return [];
}

function sortingFindSum(arr: number[], value: number) {
    let first = 0,
        mid;
    let last = arr.length - 1;
    let found = false;
    let arrayIndex = -1;

    while (first <= last && !found) {
        mid = Math.floor((first + last) / 2);
        if (arr[mid] === value) {
            arrayIndex = mid;
            found = true;
        } else {
            if (value < arr[mid]) {
                last = mid - 1;
            } else {
                first = mid + 1;
            }
        }

        if (found) {
            return arrayIndex;
        } else {
            return false;
        }
    }
}
