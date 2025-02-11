function intervalsIntersection(
    intervalListA: number[][],
    intervalListB: number[][],
): number[][] {
    const output: number[][] = [];

    let i = 0,
        j = 0;

    while (i < intervalListA.length && j < intervalListB.length) {
        const start = Math.max(intervalListA[i][0], intervalListB[j][0]);
        const end = Math.min(intervalListA[i][1], intervalListB[j][1]);

        if (start <= end) {
            output.push([start, end]);
        }

        if (intervalListA[i][1] < intervalListB[j][1]) {
            i++;
        } else {
            j++;
        }
    }

    return output;
}
