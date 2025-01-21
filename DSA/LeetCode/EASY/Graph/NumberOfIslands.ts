/**
 * @param grid
 * @param r
 * @param c
 */
function dfs(grid: string[][], r: number, c: number): void {
    const rows = grid.length;
    const cols = grid[0].length;

    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
        return;
    }

    grid[r][c] = '0';

    dfs(grid, r + 1, c);
    dfs(grid, r - 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
}

/**
 * @param grid
 * @returns
 */
function numIslands(grid: string[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;

    let numIslands = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                numIslands++;
                dfs(grid, r, c);
            }
        }
    }

    return numIslands;
}
