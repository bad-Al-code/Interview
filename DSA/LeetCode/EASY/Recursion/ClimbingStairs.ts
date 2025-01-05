/**
 * Solves the "Climbing Stairs" problem using an iterative approach.
 *
 * @param {number} n - The number of steps to climb.
 * @returns {number} - The number of distinct ways to climb `n` steps.
 *
 * @example
 * const result = climbStairs(5); // 8
 *
 * @logic
 * - This is similar to the Fibonacci sequence, where:
 *   - ways(1) = 1
 *   - ways(2) = 2
 *   - ways(n) = ways(n-1) + ways(n-2)
 * - Use two variables to keep track of the last two results, iteratively calculate the next.
 *
 * @timeComplexity O(n) - Iterates through the sequence once.
 * @spaceComplexity O(1) - Constant space usage.
 */

function climbStairs(n: number): number {
    if (n <= 1) return 1;

    let prev = 1;
    let curr = 2;

    for (let i = 3; i <= n; i++) {
        let temp = curr;
        curr = curr + prev;
        prev = temp;
    }

    return curr;
}

function climbStairsRecursive(n: number): number {
    if (n <= 1) return 1;
    if (n === 2) return 2;

    return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
}
