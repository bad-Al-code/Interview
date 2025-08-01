function generateNextRow(prevRow: number[]): number[] {
    const nextRow: number[] = [1];

    for (let i = 0; i < prevRow.length - 1; i++) {
        const sum = prevRow[i] + prevRow[i + 1];
        nextRow.push(sum);
    }

    nextRow.push(1);

    return nextRow;
}

function generate(numRows: number): number[][] {
    if (numRows <= 0) {
        return [];
    }

    const triangle: number[][] = [[1]];

    if (numRows === 1) {
        return triangle;
    }

    for (let i = 1; i < numRows; i++) {
        const prevRow = triangle[triangle.length - 1];
        
        const nextRow = generateNextRow(prevRow);
        
        triangle.push(nextRow);
    }

    return triangle;
}
