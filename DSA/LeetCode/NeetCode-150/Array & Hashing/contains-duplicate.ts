/**
 * Checks if the given array contains the duplicates number using a hash set.
 * @param nums The array of numbers to check.
 * @returns True, if any duplicates exist. otherwise false.
 *
 * @complexity
 * Time: O(n) - Each loopup and insertion in set is O(1) on average.
 * Space: O(n) - A set can grow up to the size of the input array,
 */
function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();

    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }

        seen.add(num);
    }

    return false;
}

/**
 * Checks if the given array contains any duplicate numbers by sorting first.
 * @param nums The array of numbers to check.
 * @returns Returns true if any duplicates exist, otherwise false.
 *
 * @complexity
 * Time Complexity: O(n log n) — Sorting dominates the runtime.
 * Space Complexity: O(1) or O(n) — Depends on the sorting algorithm (implementation-specific).
 */
function containsDuplicateUsingSorting(nums: number[]): boolean {
    const n = nums.length;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (nums[i] === nums[i + 1]) return true;
    }

    return false;
}

/**
 * Checks if the given array contains any duplicate numbers using a brute-force approach.
 * Note: This approach may cause **TLE (Time Limit Exceeded)** for large inputs.
 * @param nums - The array of numbers to check.
 * @returns Returns true if any duplicates exist, otherwise false.
 *
 * @complexity
 * Time Complexity: O(n²) — Double nested loops check each pair.
 * Space Complexity: O(1) — Uses only constant extra space.
 */

function containsDuplicateBruteForce(nums: number[]): boolean {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // for (let j = i+1; j < n; j++) { // To avoid duplication, start from  i+1
            // if (nums[i] === nums[j]) {
            if (i !== j && nums[i] === nums[j]) {
                return true;
            }
        }
    }

    return false;
}

const testCases: { input: number[]; expected: boolean }[] = [
    { input: [1, 2, 3, 1], expected: true },
    { input: [1, 2, 3, 4], expected: false },
    { input: [], expected: false },
    { input: [0, 0], expected: true },
    { input: [5], expected: false },
    { input: [1, 2, 3, 4, 5, 1], expected: true },
];

console.log('Testing containsDuplicate (HashSet method):');
for (const { input, expected } of testCases) {
    console.log(
        `Input: ${input} → Output: ${containsDuplicate(input)} | Expected: ${expected}`,
    );
}

console.log('\nTesting containsDuplicateUsingSorting (Sorting method):');
for (const { input, expected } of testCases) {
    console.log(
        `Input: ${input} → Output: ${containsDuplicateUsingSorting(input)} | Expected: ${expected}`,
    );
}

console.log('\nTesting containsDuplicateBruteForce (Brute Force method):');
for (const { input, expected } of testCases) {
    console.log(
        `Input: ${input} → Output: ${containsDuplicateBruteForce(input)} | Expected: ${expected}`,
    );
}
