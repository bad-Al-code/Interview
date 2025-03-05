/**
 * @param {number} n
 * @returns {number}
 */
function coloredCells(n: number): number {
    // 1. Understanding the Pattern:
    //   - At step 1, there is 1 colored cell (the center).
    //   - At step 2, there are 5 colored cells (the center plus 4 surrounding it).
    //   - At step 3, there are 13 colored cells.
    //   - At step 4, there are 25 colored cells.
    //
    //   The differences between consecutive steps are: 4, 8, 12... which form an arithmetic progression.
    //   This suggests a quadratic relationship.
    //
    // 2. Deriving the Formula:
    //   We can observe that the total number of colored cells at step 'n' can be represented by the formula:
    //   totalCells = 2 * n * (n - 1) + 1
    //   This formula accurately calculates the number of colored cells for each step.

    return 2 * n * (n - 1) + 1;
}

const n1 = 1;
const n2 = 2;
const n3 = 3;
const n4 = 4;

console.log(`Colored cells for n = ${n1}: ${coloredCells(n1)}`);
console.log(`Colored cells for n = ${n2}: ${coloredCells(n2)}`);
console.log(`Colored cells for n = ${n3}: ${coloredCells(n3)}`);
console.log(`Colored cells for n = ${n4}: ${coloredCells(n4)}`);
