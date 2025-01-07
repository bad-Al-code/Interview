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
 * @timeComplexity O(n^2) - In the worst case (when the array is in reverse order), each element has to be compared with all previous elements.
 * @spaceComplexity O(1) - In-place sorting with no additional memory used.
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
