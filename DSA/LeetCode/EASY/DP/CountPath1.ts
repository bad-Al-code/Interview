function countPath(m: number, n: number): number {
    let prevRow = new Array<number>(n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        let currRow = new Array<number>(n).fill(0);
        currRow[n - 1] = 1;

        for (let j = n - 2; j >= 0; j--) {
            currRow[j] = currRow[j + 1] + prevRow[j];
        }

        prevRow = currRow;
    }

    return prevRow[0];
}
