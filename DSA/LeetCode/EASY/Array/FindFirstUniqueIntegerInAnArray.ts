/**
 * Find first unique integer in the array
 *
 * @param {number[]} arr - Input array.
 * @returns {number|null} Returns the first unique integer otherwise null
 *
 * @example
 * input: const arr = [4, 5, 1, 2, 0, 4];
 * output: 5
 *
 * @timeComplexity: O(n^2)
 */
function findFirstUnique(arr: number[]): number | null {
    if (arr.length === 0) return null;

    for (let i of arr) {
        let uniqueElement = true;
        for (let j of arr) {
            if (i !== j && arr[i] === arr[j]) {
                uniqueElement = false;
            }
        }
        if (uniqueElement) return arr[i];
    }

    return null;
}

/**
 * @logic
 * Use a hash map to count occurrences of each element in the array.
 * Then iterate through the array to find the first element with a count of 1.
 *
 * @timeComplexity O(n) - Two iterations over the array.
 * @spaceComplexity O(n) - Space for the hash map.
 */
function findFirstUniqueUsingHashing(arr: number[]): number | null {
    const uniqueMap: Map<number, number> = new Map();

    for (let element of arr) {
        uniqueMap.set(element, (uniqueMap.get(element) || 0) + 1);
    }

    for (let element of arr) {
        if (uniqueMap.get(element) === 1) return element;
    }

    return null;
}

/**
 * @logic
 * Sort the array, then iterate through it while checking neighboring elements to find the first unique value.
 * Keep track of visited indices to skip duplicates efficiently.
 *
 * @timeComplexity O(n log n) - Sorting the array dominates the complexity.
 * @spaceComplexity O(1) - Sorting is done in-place (if mutable array sorting is used).
 */
function findFirstUniqueUsingSorting(arr: number[]): number | null {
    const sortedArray = [...arr].sort((a, b) => a - b);

    for (let i of arr) {
        const uniqueElement =
            (i === 0 || sortedArray[i] !== sortedArray[i - 1]) &&
            (i === sortedArray.length - 1 || sortedArray[i + 1]);

        if (uniqueElement) return sortedArray[i];
    }
    return null;
}
