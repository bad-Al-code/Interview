/**
 * Sorts an array of numbers in ascending order using the Insertion Sort algorithm.
 *
 * @param {number[]} array - The array of numbers to sort.
 * @returns {number[]} - The sorted array.
 *
 * @example
 * const arr = [5, 3, 8, 4, 2];
 * const sortedArr = insertionSort(arr);
 * console.log(sortedArr); // Output: [2, 3, 4, 5, 8]
 *
 * @logic
 * - start from index 1 (0-based index), why? Because we already knwo if there is only one element in array is always sorted already.
 * - initaizle a pointer before i, and move it toe the i to j as it gets out of bound
 * - check if current element value is greater than its next element, and if it is, swap with next element
 * - iterate to the entire arraym
 * - at the end, you will find your sorted array
 *
 * @timeComplexity O(n^2) - In the worst case (when the array is in reverse order), each element has to be compared with all previous elements.
 *                 O(n) - In the best case, if input array is already sorted.
 * @spaceComplexity O(1) - In-place (stable) sorting with no additional memory used.
 */
function insertionSort(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
        let j = i - 1;
        while (array[j + 1] < array[j] && j >= 0) {
            let temp = array[j + 1];
            array[j + 1] = array[j];
            array[j] = temp;

            j -= 1;
        }
    }

    return array;
}