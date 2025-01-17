/**
 * @param {number[]} arr1 - First array.
 * @param {number[]} arr2 - Second array.
 * @return {boolean} - True if arr1 is a subset of arr2, false otherwise.
 */
function isSubset(arr1: number[], arr2: number[]): boolean {
    if (arr1.length === 0) return true;
    if (arr2.length === 0) return false;

    const [smallerArray, largerArray] =
        arr1.length > arr2.length ? [arr2, arr1] : [arr1, arr2];

    const set: Set<number> = new Set(largerArray);

    for (const num of smallerArray) {
        if (!set.has(num)) {
            return false;
        }
    }

    return true;
}

console.log(isSubset([1, 2, 3], [3, 1, 2, 4, 5]));
console.log(isSubset([1, 6], [3, 1, 2, 4, 5]));
console.log(isSubset([], [3, 1, 2]));
console.log(isSubset([1, 2, 3], []));
console.log(isSubset([], []));
