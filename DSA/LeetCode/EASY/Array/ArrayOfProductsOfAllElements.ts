/**
 * Cmpute the product of all element in the array except the one at the current index.
 *
 * @param {number[]} arr Input array
 * @returns {number[]} An result array that contains product of each element expcept itself.
 *
 * @example
 * const arr = [1, 2, 3, 4];
 * const result = findProduct(arr); // Output: [24, 12, 8, 6]
 *
 * @throws {Error} If array size is less than 2
 *
 * @logic
 * 1. Use the ouptut array for calculating the prefix product and store in the result array
 * 2. Calculate postfix product and multiply with the element already present in the result array for that index.
 *
 * @timeComplexity: O(n), one iteartion
 * @spaceCoplexity: O(1), no extra space, {other than utput array, that we dont count, a/c to qurstion}
 */
function findProduct(arr: number[]): number[] {
    if (arr.length < 2) {
        throw new Error('Array size must be grater than 2');
    }

    let result: number[] = new Array(arr.length);

    let prefix = 1;
    for (let i = 0; i < arr.length; i++) {
        result[i] = prefix;
        prefix *= arr[i];
    }

    let sufix = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        result[i] *= sufix;
        sufix *= arr[i];
    }
    return result;
}

const arr = [1, 2, 3, 4];
console.log(`Output: [${findProduct(arr)}]`);
