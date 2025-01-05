/**
 * Computes the factorial of a given number iteratively.
 *
 * @param {number} n - The number for which the factorail is alualted/
 * @returns {number} - The factorial of given number.
 *
 * @throws Error if `n` is less than 0.
 *
 * @example
 * factorailIterative(5); // Returns 120
 *
 * @logic
 * 1. Start with a `result` variable initialized to 1.
 * 2. Loop from 1 to `n` and multiply `result` by each number.
 * 3. Return `result` arter the loop.
 *
 * @timeComplexity: O(n) -> the loop runs `n` times.
 * @spaceComplexity: O(1) -> constant space.
 */

function factorailIterative(n: number): number {
    if (n < 0) {
        throw new Error('Factorail is not defined for negative numbers.');
    }
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

/**
 * Compute the factorial of given number recursively.
 *
 * @param {number} n - Input number.
 * @returns {number} - factorail of input number.
 *
 * @throws Error - if `n` is less than 0.
 *
 * @logic
 * 1. Base case: if `n` is 0 return 1.
 * 2. Recursive Step: Return `n*factorailRecursive(n-1)`.
 * 3. run until base case hits.
 *
 * @timeComplexity O(n) - Recursion depth is `n`.
 * @spaceComplexity O(n) - stack space for recursion calls.
 */
function factorailRecursive(n: number): number {
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers.');
    }

    if (n === 0) return 1;

    return n * factorailRecursive(n - 1);
}
