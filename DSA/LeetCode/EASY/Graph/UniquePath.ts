function dfs(r: number, c: number, ROWS: number, COLS: number): number {
    if (r >= ROWS || c >= COLS) {
        return 0;
    }

    if (r === ROWS - 1 && c === COLS - 1) {
        return 1;
    }

    const down = dfs(r + 1, c, ROWS, COLS);
    const right = dfs(r, c + 1, ROWS, COLS);

    return down + right;
}

function uniquePaths(m: number, n: number): number {
    return dfs(0, 0, m, n);
}
