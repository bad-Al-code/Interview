function rotateImage(matrix: number[][]): number[][] {
    const n = matrix.length;

    for (let row = 0; row < n / 2; row++) {
        for (let col = row; col < n - row - 1; col++) {
            [matrix[row][col], matrix[col][n - 1 - row]] = [
                matrix[col][n - 1 - row],
                matrix[row][col],
            ];

            [matrix[row][col], matrix[n - 1 - row][n - 1 - col]] = [
                matrix[n - 1 - row][n - 1 - col],
                matrix[row][col],
            ];

            [matrix[row][col], matrix[n - 1 - col][row]] = [
                matrix[n - 1 - col][row],
                matrix[row][col],
            ];
        }
    }
    return matrix;
}
