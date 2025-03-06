/**
 * @param { number[][]} grid
 * @returns { number[]}
 */
function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const gridLen = grid.length;
    const counts: number[] = new Array(gridLen * gridLen + 1).fill(0);

    let repeated = -1;
    let missing = -1;

    for (const row of grid) {
        for (const num of row) {
            counts[num]++;
        }
    }

    for (let i = 1; i <= gridLen * gridLen; i++) {
        if (counts[i] === 2) {
            repeated = i;
        } else if (counts[i] === 0) {
            missing = i;
        }
    }

    return [repeated, missing];
}

export const grid1 = [
    [1, 3],
    [2, 2],
];
export const grid2 = [
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
];

console.log(
    `Missing and repeated values for grid1: ${findMissingAndRepeatedValues(grid1)}`,
);
console.log(
    `Missing and repeated values for grid2: ${findMissingAndRepeatedValues(grid2)}`,
);
