/**
 * Counts the number of paths from the top-left corner to the bottom-right corner of a grid.
 * Paths can only traverse through cells with a value of `0` and cannot revisit the same cell.
 *
 * @param grid
 * @param r
 * @param c
 * @param visit
 * @returns The number of distinct paths from the current position to the bottom-right corner.
 */
function dfs(
    grid: number[][],
    r: number,
    c: number,
    visit: number[][],
): number {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    if (
        r < 0 ||
        c < 0 ||
        r >= ROWS ||
        c >= COLS ||
        visit[r][c] === 1 ||
        grid[r][c] === 1
    ) {
        return 0;
    }

    if (r === ROWS - 1 && c === COLS - 1) {
        return 1;
    }

    visit[r][c] = 1;

    let count = 0;

    count += dfs(grid, r + 1, c, visit);
    count += dfs(grid, r - 1, c, visit);
    count += dfs(grid, r, c + 1, visit);
    count += dfs(grid, r, c - 1, visit);

    visit[r][c] = 0;

    return count;
}

const grid1: number[][] = [
    [0, 0],
    [0, 0],
];
const visit1: number[][] = Array.from({ length: grid1.length }, () =>
    Array(grid1[0].length).fill(0),
);
console.log(dfs(grid1, 0, 0, visit1));

const grid2: number[][] = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
];
const visit2: number[][] = Array.from({ length: grid2.length }, () =>
    Array(grid2[0].length).fill(0),
);
console.log(dfs(grid2, 0, 0, visit2));

const grid3: number[][] = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
];
const visit3: number[][] = Array.from({ length: grid3.length }, () =>
    Array(grid3[0].length).fill(0),
);
console.log(dfs(grid3, 0, 0, visit3));

const grid4: number[][] = [[0, 0, 0, 0]];
const visit4: number[][] = Array.from({ length: grid4.length }, () =>
    Array(grid4[0].length).fill(0),
);
console.log(dfs(grid4, 0, 0, visit4));

const grid5: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
const visit5: number[][] = Array.from({ length: grid5.length }, () =>
    Array(grid5[0].length).fill(0),
);
console.log(dfs(grid5, 0, 0, visit5));
