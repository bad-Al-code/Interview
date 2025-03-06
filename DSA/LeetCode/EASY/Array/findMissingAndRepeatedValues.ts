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

    for (let i = 1; i <= gridLen; i++) {
        if (counts[i] === 2) {
            repeated = i;
        } else if (counts[i] === 0) {
            missing = i;
        }
    }

    return [repeated, missing];
}
