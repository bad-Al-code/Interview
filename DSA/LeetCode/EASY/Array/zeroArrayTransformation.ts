interface Query {
    l: number;
    r: number;
    val: number;
}

/**
 * @param queries - An array of queries in `[l, r, val]` format.
 * @returns An array of properly structured `Query` objects.
 */
function parseQueries(queries: number[][]): Query[] {
    return queries.map(([l, r, val]) => ({ l, r, val }));
}

/**
 * @param nums
 * @param queries
 * @param k
 * @returns
 */
function canTransformToZero(
    nums: number[],
    queries: Query[],
    k: number,
): boolean {
    const n = nums.length;
    const diff: number[] = new Array(n + 1).fill(0);

    for (let i = 0; i < k; i++) {
        const { l, r, val } = queries[i];
        diff[l] -= val;
        diff[r + 1] += val;
    }

    let sum = 0;
    const updatedNums: number[] = [...nums];

    for (let i = 0; i < n; i++) {
        sum += diff[i];
        updatedNums[i] = Math.max(0, updatedNums[i] + sum);

        if (updatedNums[i] > 0) {
            return false;
        }
    }

    return true;
}

/**
 * @param nums
 * @param queries
 * @returns
 */
function minZeroArray(nums: number[], queries: Query[]): number {
    let left = 0;
    let right = queries.length;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canTransformToZero(nums, queries, mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
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
    const parsedQueries = parseQueries(testCase.queries);
    const result = minZeroArray(testCase.nums, parsedQueries);
    console.log(`Test Case ${index + 1}:`);
    console.log(`  Input nums: ${testCase.nums}`);
    console.log(`  Input queries: ${JSON.stringify(testCase.queries)}`);
    console.log(`  Expected: ${testCase.expected}`);
    console.log(`  Actual: ${result}`);
    console.log(`  ${result === testCase.expected ? 'Passed' : 'Failed'}`);
    console.log('---');
});
