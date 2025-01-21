/**
 * @param grid
 * @param r
 * @param c
 * @returns
 */
function dfs(grid: number[][], r: number, c: number): number {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    if (r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] === 0) {
        return 0;
    }

    grid[r][c] = 0;

    let area = 1;

    area += dfs(grid, r + 1, c);
    area += dfs(grid, r - 1, c);
    area += dfs(grid, r, c + 1);
    area += dfs(grid, r, c - 1);

    return area;
}

/**
 * @param grid
 * @returns
 */
function maxAreaOfIsland(grid: number[][]): number {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    let maxArea = 0;

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 1) {
                const area = dfs(grid, r, c);
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
}
