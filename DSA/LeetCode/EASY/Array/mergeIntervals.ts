function mergeInterval(intervals: number[][]): number[][] {
    if (!intervals.length) return [];

    const result: number[][] = [];

    result.push([intervals[0][0], intervals[0][1]]);

    let lastAddedInterval, curStart, curEnd, prevEnd;
    for (let i = 1; i < intervals.length; i++) {
        lastAddedInterval = result[result.length - 1];

        curStart = intervals[i][0];
        curEnd = intervals[i][1];
        prevEnd = lastAddedInterval[1];

        if (prevEnd >= curStart) {
            result[result.length - 1][1] = Math.max(curEnd, prevEnd);
        } else {
            result.push([curStart, curEnd]);
        }
    }

    return result;
}

export function main() {
    let allIntervals = [
        [
            [1, 5],
            [3, 7],
            [4, 6],
        ],
        [
            [1, 5],
            [4, 6],
            [6, 8],
            [11, 15],
        ],
        [
            [3, 7],
            [6, 8],
            [10, 12],
            [11, 15],
        ],
        [[1, 5]],
        [
            [1, 9],
            [3, 8],
            [4, 4],
        ],
        [
            [1, 2],
            [3, 4],
            [8, 8],
        ],
        [
            [1, 5],
            [1, 3],
        ],
        [
            [1, 5],
            [6, 9],
        ],
        [
            [0, 0],
            [1, 18],
            [1, 3],
        ],
    ];

    for (let i = 0; i < allIntervals.length; i++) {
        console.log(i + 1 + '. Intervals to merge:', allIntervals[i]);
        let result = mergeInterval(allIntervals[i]);
        console.log('   Merged intervals:', result);
        console.log('-'.repeat(100));
    }
}

main();
