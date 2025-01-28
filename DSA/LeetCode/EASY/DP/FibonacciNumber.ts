/**
 * Brute Force
 * This implementation has exponential time complexity (O(2^n)).
 *
 * @param {number} n
 * @returns {number}
 */
function fibBruteForce(n: number): number {
    if (n <= 1) return n;
    return fibBruteForce(n - 1) + fibBruteForce(n - 2);
}

/** Bottom-Up Dynamic Programming
 * This implementation has linear time complexity (O(n)) and constant space complexity (O(1)).
 *
 * @param {number} n
 * @returns {number}
 */
function fibBottomUp(n: number): number {
    if (n <= 1) return n;

    const dp: number[] = [0, 1];
    let i = 2;

    while (i <= n) {
        const temp = dp[1];
        dp[1] = dp[1] + dp[0];
        dp[0] = temp;
        i++;
    }

    return dp[1];
}

/** Top-Down Memoization
 * This implementation has linear time complexity (O(n)) due to memoization.
 *
 * @param {number} n
 * @returns {number}
 */
function fibTopDown(n: number): number {
    if (n <= 1) return n;

    const memo: Map<number, number> = new Map();

    if (memo.has(n)) {
        return memo.get(n)!;
    }

    const result = fibTopDown(n - 1) + fibTopDown(n - 2);

    memo.set(n, result);

    return result;
}
