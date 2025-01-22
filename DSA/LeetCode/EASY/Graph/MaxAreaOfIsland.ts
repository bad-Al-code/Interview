function maxAreaOfIsland(grid: number[][]): number {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    if (ROWS === 0 || COLS === 0) {
        return 0;
    }

    const visit: Set<string> = new Set();
    let count = 0;

    const dfs = (r: number, c: number): number => {
        if (
            r < 0 ||
            c < 0 ||
            r >= ROWS ||
            c >= COLS ||
            grid[r][c] === 0 ||
            visit.has(`${r},${c}`)
        ) {
            return 0;
        }

        visit.add(`${r},${c}`);

        return (
            1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1)
        );
    };

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === 1 && !visit.has(`${i},${j}`)) {
                const area = dfs(i, j);

                count = Math.max(area, count);
            }
        }
    }

    return count;
}

const grid = [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 0, 0, 1, 1],
];

console.log(maxAreaOfIsland(grid));
