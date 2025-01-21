/**
 * @param r
 * @param c
 * @param ROWS
 * @param COLS
 * @returns
 */
function dfs(
    r: number,
    c: number,
    ROWS: number,
    COLS: number,
    memo: number[][],
): number {
    if (r >= ROWS || c >= COLS) {
        return 0;
    }

    if (r === ROWS - 1 && c === COLS - 1) {
        return 1;
    }

    if (memo[r][c] !== -1) {
        return memo[r][c];
    }

    const down = dfs(r + 1, c, ROWS, COLS, memo);
    const right = dfs(r, c + 1, ROWS, COLS, memo);

    memo[r][c] = down + right;

    return memo[r][c];
}

/**
 * @param m
 * @param n
 * @returns
 */
function uniquePaths(m: number, n: number): number {
    const memo: number[][] = Array.from({ length: m }, () => Array(n).fill(-1));

    return dfs(0, 0, m, n, memo);
}
