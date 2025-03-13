function isZeroArray(arr: number[]): boolean {
    return arr.every((num) => num === 0);
}

function applyQueries(arr: number[], queriesToApply: number[][]): number[] {
    const result = [...arr];

    for (const [l, r, val] of queriesToApply) {
        for (let i = l; i <= r; i++) {
            result[i] = Math.max(0, result[i] - val);
        }
    }

    return result;
}

function minZeroArray(nums: number[], queries: number[][]): number {
    const n = nums.length;
    const m = queries.length;

    for (let i = 0; i <= m; i++) {
        const queriesToApply = queries.slice(0, i);
        const modifiedNums = applyQueries(nums, queriesToApply);

        if (isZeroArray(modifiedNums)) {
            return i;
        }
    }

    return -1;
}

export const testCases: {
    nums: number[];
    queries: number[][];
    expected: number;
}[] = [
    {
        nums: [1, 2, 3, 4, 5],
        queries: [
            [0, 2, 1],
            [1, 3, 2],
            [2, 4, 3],
        ],
        expected: 3,
    },
    {
        nums: [5, 4, 3, 2, 1],
        queries: [[0, 4, 5]],
        expected: 1,
    },
    {
        nums: [1, 1, 1, 1, 1],
        queries: [
            [0, 2, 1],
            [2, 4, 1],
        ],
        expected: 2,
    },
    {
        nums: [1, 2, 3],
        queries: [
            [0, 1, 1],
            [1, 2, 2],
            [0, 2, 3],
        ],
        expected: 3,
    },
    {
        nums: [1, 2, 3],
        queries: [
            [0, 1, 1],
            [1, 2, 1],
        ],
        expected: -1,
    },
    {
        nums: [1, 2, 3, 4, 5],
        queries: [
            [0, 0, 1],
            [1, 1, 2],
            [2, 2, 3],
            [3, 3, 4],
            [4, 4, 5],
        ],
        expected: 5,
    },
    {
        nums: [1],
        queries: [[0, 0, 1]],
        expected: 1,
    },
    {
        nums: [2, 2, 2],
        queries: [
            [0, 2, 1],
            [0, 2, 1],
        ],
        expected: 2,
    },
    {
        nums: [3, 3, 3],
        queries: [
            [0, 1, 2],
            [1, 2, 2],
            [0, 2, 1],
        ],
        expected: 3,
    },
    {
        nums: [1, 1, 1, 1, 1, 1],
        queries: [[0, 5, 1]],
        expected: 1,
    },
];

testCases.forEach((testCase, index) => {
    const result = minZeroArray(testCase.nums, testCase.queries);
    console.log(`Test Case ${index + 1}:`);
    console.log(`  Input nums: ${testCase.nums}`);
    console.log(`  Input queries: ${JSON.stringify(testCase.queries)}`);
    console.log(`  Expected: ${testCase.expected}`);
    console.log(`  Actual: ${result}`);
    console.log(`  ${result === testCase.expected ? 'Passed' : 'Failed'}`);
    console.log('---');
});
