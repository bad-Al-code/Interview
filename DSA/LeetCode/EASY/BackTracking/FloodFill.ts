function dfs(
    grid: number[][],
    row: number,
    col: number,
    oldTarget: number,
    newTarget: number,
): void {
    let offsets = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
    ];

    const gridLength = grid.length;
    const totalCells = grid[0].length;

    for (let i = 0; i < offsets.length; i++) {
        let cellValue = offsets[i];
        let r = row + cellValue[0];
        let c = col + cellValue[1];

        if (
            r < gridLength &&
            r >= 0 &&
            c < totalCells &&
            c >= 0 &&
            grid[r][c] === oldTarget
        ) {
            grid[r][c] = newTarget;

            dfs(grid, r, c, oldTarget, newTarget);
        }
    }
}

function floodFill(
    grid: number[][],
    sr: number,
    sc: number,
    target: number,
): number[][] {
    if (grid[sr][sc] === target) {
        return grid;
    } else {
        let oldTraget = grid[sr][sc];

        dfs(grid, sr, sc, oldTraget, target);

        return grid;
    }
}

function main() {
    // Input grid of grids
    let grids: number[][][] = [
        [
            [1, 1, 0, 1],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [1, 0, 1, 1],
        ],
        [
            [1, 1, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 1],
            [1, 1, 1, 1],
        ],
        [
            [9, 9, 6, 9],
            [6, 9, 9, 6],
            [6, 9, 9, 9],
            [9, 9, 9, 9],
        ],
        [
            [1, 1, 0, 1, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 1],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0],
        ],
        [
            [1, 2, 0, 0],
            [3, 1, 3, 6],
            [7, 2, 1, 5],
            [1, 9, 2, 1],
        ],
    ];

    let startingRow: number[] = [2, 2, 2, 4, 1];
    let startingCol: number[] = [3, 3, 1, 3, 1];
    let newTarget: number[] = [0, 2, 1, 3, 4];

    for (let i = 0; i < grids.length; i++) {
        console.log(i + 1 + '.\t Grid before flood fill: ', grids[i]);
        console.log(
            '\t Starting row and column are: (',
            startingRow[i],
            ', ',
            startingCol[i],
            ')',
        );
        console.log('\t Target value: ', newTarget[i]);
        console.log(
            '\t After perform flood fill: ',
            floodFill(grids[i], startingRow[i], startingCol[i], newTarget[i]),
        );
        console.log('-'.repeat(100));
    }
}

main();
