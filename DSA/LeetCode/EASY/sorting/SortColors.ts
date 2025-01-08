/**
 * Sorts an array containing only 0, 1, and 2 in-plcae
 *
 * @param {number[]} arr - The input array
 * @returns {number[]} Returns sorted array
 *
 *  @example
 * const arr = [2, 0, 1, 2, 0, 1];
 * const sortedArr = sortColors(arr);
 * console.log(sortedArr); // Output: [0, 0, 1, 1, 2, 2]
 *
 * @logic
 * - Use three pointers: `low`, `high` and `mid`
 * - `low` rtracks the end of 0s section, `high` tracks the start of 2s section, and `mid` processes element
 * - Swap elements into their correct position based on their value.
 *
 * @timeComplexity O(n) Each element is processed atmost once.
 * @spaceComplexity O(1)
 */
function sortColors(arr: number[]): number[] {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], (arr[mid] = arr[mid]), arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else if (arr[mid] === 2) {
            [arr[mid], (arr[high] = arr[high]), arr[mid]];
            high--;
        }
    }
    return arr;
}
