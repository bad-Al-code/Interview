function insertInterval(
    exisitingIntervals: number[][],
    newInterval: number[],
): number[][] {
    const newStart = newInterval[0];
    const newEnd = newInterval[1];

    exisitingIntervals.sort((a, b) => a[0] - b[0]);

    const n = exisitingIntervals.length;
    const output: number[][] = [];

    let i = 0;
    while (i < n && newStart > exisitingIntervals[i][0]) {
        output.push(exisitingIntervals[i]);

        i++;
    }

    if (!output.length || output[output.length - 1][1] < newStart) {
        output.push(newInterval);
    } else {
        output[output.length - 1][1] = Math.max(
            output[output.length - 1][1],
            newEnd,
        );
    }

    while (i < n) {
        let currInterval = exisitingIntervals[i];
        const start = currInterval[0];
        const end = currInterval[1];

        if (output[output.length - 1][1] < start) {
            output.push(currInterval);
        } else {
            output[output.length - 1][1] = Math.max(
                output[output.length - 1][1],
                end,
            );
        }

        i++;
    }

    return output;
}

function main() {
    const newIntervals: number[][] = [
        [5, 7],
        [8, 9],
        [10, 12],
        [1, 3],
        [1, 10],
    ];

    const existingIntervals: number[][][] = [
        [
            [1, 2],
            [3, 5],
            [6, 8],
        ],
        [
            [1, 3],
            [5, 7],
            [10, 12],
        ],
        [
            [8, 10],
            [12, 15],
        ],
        [
            [5, 7],
            [8, 9],
        ],
        [[3, 5]],
    ];

    for (let i = 0; i < newIntervals.length; i++) {
        console.log(i + 1 + '.\tExisting intervals:', existingIntervals[i]);
        console.log('\tNew interval:', newIntervals[i]);
        const output = insertInterval(existingIntervals[i], newIntervals[i]);
        console.log('\tUpdated intervals:', output);
        console.log('-'.repeat(100));
    }
}

main();
