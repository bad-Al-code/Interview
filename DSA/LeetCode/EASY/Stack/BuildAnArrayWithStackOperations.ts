/**
 * Builds the sequence of operations to match the target array using the stream of numbers from 1 to `n`.
 * This solution uses a set to track the numbers that need to be pushed to the stack.
 *
 * @param {number[]} target - The target array that the stack should eventually match.
 * @param {number} n - The upper limit of the integer sequence (1 to n).
 * @returns {string[]} - An array of operations ("Push", "Pop") to build the target array.
 *
 * @example
 * const target = [1, 3, 5];
 * const n = 5;
 * const result = buildArray(target, n);
 * console.log(result); // Output: ["Push", "Push", "Pop", "Push", "Push", "Pop", "Push"]
 *
 * @logic
 * - Use a set to track the target elements for quick lookups.
 * - Push numbers to the stack from 1 to `n`, only keeping the numbers that are part of the target.
 * - If the number is not in the target, push and immediately pop it.
 * - Stop when all numbers in the target are matched.
 *
 * @timeComplexity O(n) - We iterate through the range [1, n], and each set operation (`has` and `delete`) takes O(1).
 * @spaceComplexity O(m) - Space required for the target set, where m is the length of the target array.
 */
function buildArray(target: number[], n: number): string[] {
    let currentNum = 1;
    let targetSet: Set<number> = new Set(target);
    let result: string[] = [];

    for (let i = 0; i < n; i++) {
        if (targetSet.has(currentNum)) {
            result.push('Push');
            targetSet.delete(currentNum);
        } else {
            result.push('PUSH');
            result.push('POP');
        }

        if (targetSet.size === 0) break;

        currentNum++;
    }

    return result;
}

/**
 * Builds the sequence of operations to match the target array without using extra space for a set.
 * This approach avoids space usage by directly comparing the current number to the target array.
 *
 * @param {number[]} target - The target array that the stack should eventually match.
 * @param {number} n - The upper limit of the integer sequence (1 to n).
 * @returns {string[]} - An array of operations ("Push", "Pop") to build the target array.
 *
 * @example
 * const target = [1, 3, 5];
 * const n = 5;
 * const result = buildArrayWithoutSpace(target, n);
 * console.log(result); // Output: ["Push", "Push", "Pop", "Push", "Push", "Pop", "Push"]
 *
 * @logic
 * - Iterate through the sequence 1 to n and compare with the target.
 * - If the current number matches the target, push it and move to the next target element.
 * - If the current number does not match, push it and immediately pop it.
 * - Stop when all numbers in the target are matched.
 *
 * @timeComplexity O(n) - We iterate through the range [1, n], and comparison operations take O(1).
 * @spaceComplexity O(1) - No extra space is used, except for the result array.
 */
function buildArrayWithoutSpace(target: number[], n: number): string[] {
    let result: string[] = [];
    let current = 1;
    let index = 0;

    while (index < target.length) {
        if (current === target[index]) {
            result.push('Push');
            index++;
        } else {
            result.push('Push');
            result.push('Pop');
        }

        current++;

        if (current > n) break;
    }

    return result;
}
