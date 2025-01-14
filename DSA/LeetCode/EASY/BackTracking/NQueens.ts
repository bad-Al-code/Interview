function isValidMove(
    proposedRow: number,
    proposedCol: number,
    solution: number[],
): boolean {
    for (let i = 0; i < proposedRow; i++) {
        const oldRow = i;
        const oldCol = solution[i];
        const diagonalOffset = proposedRow - oldRow;

        if (
            oldCol === proposedCol ||
            oldCol === proposedCol - diagonalOffset ||
            oldCol === proposedCol + diagonalOffset
        ) {
            return false;
        }
    }
    return true;
}

function solveNQueensRec(
    n: number,
    solution: number[],
    row: number,
    results: string[][],
): void {
    if (row === n) {
        const board = solution.map((col) => {
            const rowArray = new Array(n).fill('.');
            rowArray[col] = 'Q';
            return rowArray.join('');
        });
        results.push(board);
        return;
    }

    for (let i = 0; i < n; i++) {
        const valid = isValidMove(row, i, solution);
        if (valid) {
            solution[row] = i;
            solveNQueensRec(n, solution, row + 1, results);
        }
    }
}

function solveNQueens(n: number): string[][] {
    const results: string[][] = [];
    const solution: number[] = new Array(n).fill(-1);
    solveNQueensRec(n, solution, 0, results);
    return results;
}

function main(): void {
    const n: number[] = [4, 5, 6, 7, 8];
    for (let i = 0; i < n.length; i++) {
        console.log(`${i + 1}.	Queens: ${n[i]}, Chessboard: (${n[i]}x${n[i]})`);
        const res = solveNQueens(n[i]);
        console.log(
            `\n\tTotal solutions count for ${n[i]} queens on a (${n[i]}x${n[i]}) chessboard: ${res.length}`,
        );
        console.log('-'.repeat(100), '\n');
    }
}

main();
