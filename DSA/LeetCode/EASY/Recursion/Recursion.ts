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

    if (n <= 1) return 1;

    return n * factorailRecursive(n - 1);
}

console.log(factorailRecursive(5));
console.log(factorailIterative(5));

/**
 * Calculates the nth Fibonacci number using an iterative approach.
 *
 * @param {number} n - position in fibonacci sequence.
 * @returns {number} - The nth factorail number.
 *
 * @example
 * const result = fibonacciIterative(6); // Returns 8
 *
 * @logic
 * 1. Start with the first two fibonacci number (0 and 1).
 * 2. Iteratively calculate subsequnect fibonacci number by summin the previous two.
 * 3. Stop whn thr nth fibonacci number is reached.
 *
 * @timeComplexity O(n) - One iteration through sequnece
 * @spaceComplexity O(1) - Constanct space.
 */
function fibonacciIterative(n: number): number {
    if (n < 0) throw new Error('Input must be no=negative integer');

    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0,
        curr = 1;

    for (let i = 2; i <= n; i++) {
        const temp = curr;
        curr = curr + prev;
        prev = temp;
    }

    return curr;
}

/**
 * Calculates the nth Fibonacci number using a recursive approach.
 *
 * @param {number} n - The position in the Fibonacci sequence (0-based index).
 * @returns {number} - The nth Fibonacci number.
 *
 * @example
 * const result = fibonacciRecursive(6); // 8
 *
 * @logic
 * - The nth Fibonacci number is defined as:
 *   - F(0) = 0
 *   - F(1) = 1
 *   - F(n) = F(n-1) + F(n-2) for n > 1
 * - Recursively calculate F(n-1) and F(n-2) until reaching the base cases.
 *
 * @timeComplexity O(2^n) - Exponential growth due to repeated calculations.
 * @spaceComplexity O(n) - Stack space used for recursive calls.
 */
function fibonacciRecursive(n: number): number {
    if (n < 0) throw new Error('Input must be a non-negative integer.');
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciIterative(6));
console.log(fibonacciRecursive(6));
