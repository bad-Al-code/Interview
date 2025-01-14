function isValid(givenRow: number, givenCol: number, output: number[]) {
    for (let i = 0; i < givenRow; i++) {
        const oldRow = i;
        const oldCol = output[i];
        const diagonalOffset = givenRow - oldRow;

        if (
            oldCol === givenCol ||
            oldCol === givenCol - diagonalOffset ||
            oldCol === givenCol + diagonalOffset
        ) {
            return false;
        }
    }

    return true;
}

function solveNQueensHelper(
    row: number,
    n: number,
    result: string[][],
    output: number[],
): void {
    if (row === n) {
        const createBoard = output.map((col) => {
            const newRowArray = new Array(n).fill('.');
            newRowArray[col] = 'Q';
            return newRowArray.join('');
        });

        result.push(createBoard);
        return;
    }

    for (let i = 0; i < n; i++) {
        const valid = isValid(row, i, output);

        if (valid) {
            output[row] = i;
            solveNQueensHelper(row + 1, n, result, output);
        }
    }
}

function solveNQueens(n: number): string[][] {
    const result: string[][] = [];
    const output: number[] = new Array(n).fill(-1);

    solveNQueensHelper(0, n, result, output);

    return result;
}

function main(): void {
    const n: number[] = [2, 3, 5, 6, 7, 8];
    for (let i = 0; i < n.length; i++) {
        console.log(
            `${i + 1}.\tQueens: ${n[i]}, Chessboard: (${n[i]}x${n[i]})`,
        );
        const startTime = performance.now();
        const res = solveNQueens(n[i]);
        const endTime = performance.now();
        const timeTaken = ((endTime - startTime) / 1000).toFixed(3);
        console.log(
            `\n\tTotal solutions count for ${n[i]} queens on a (${n[i]}x${n[i]}) chessboard: ${res.length}`,
        );
        console.log(`\tTime taken: ${timeTaken} seconds`);
        console.log('*'.repeat(100), '\n');
    }
}

main();
