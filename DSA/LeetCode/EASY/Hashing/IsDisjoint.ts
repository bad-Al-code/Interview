/**
 * Determines whether two arrays are disjoint (no common elements), optimized for smaller sets.
 *
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @return true if the arrays are disjoint, false otherwise.
 */
function isDisjointOptimized(arr1: number[], arr2: number[]): boolean {
    const [smaller, larger] =
        arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];

    const set = new Set(smaller);

    for (const num of larger) {
        if (set.has(num)) {
            return false;
        }
    }

    return true;
}
console.log(isDisjointOptimized([1, 2, 3], [4, 5, 6]));
console.log(isDisjointOptimized([1, 2, 3], [3, 4, 5]));
console.log(isDisjointOptimized([], [4, 5, 6]));
console.log(isDisjointOptimized([1, 2, 3], []));
