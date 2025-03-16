function repairCars(ranks: number[], cars: number): number {
    let low = 0;
    let high = Math.max(...ranks) * cars * cars;
    let ans = high;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (isPossible(ranks, cars, mid)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;

    function isPossible(ranks: number[], cars: number, time: number): boolean {
        let totalCarsRepaired = 0;
        for (let rank of ranks) {
            totalCarsRepaired += Math.floor(Math.sqrt(time / rank));
        }
        return totalCarsRepaired >= cars;
    }
}

const testCases = [
    { ranks: [4, 2, 3, 1], cars: 10, expected: 16 },
    { ranks: [5, 1, 8], cars: 6, expected: 16 },
    { ranks: [1, 1, 1, 1], cars: 10, expected: 9 },
    { ranks: [10], cars: 5, expected: 250 },
    {
        ranks: [
            21, 19, 11, 15, 23, 20, 18, 24, 10, 8, 16, 22, 12, 9, 17, 14, 13, 1,
        ],
        cars: 8,
        expected: 8,
    },
    { ranks: [4, 2, 3, 1], cars: 6, expected: 8 },
    { ranks: [1, 1], cars: 5, expected: 9 },
];

for (let i = 0; i < testCases.length; i++) {
    const { ranks, cars, expected } = testCases[i];
    const result = repairCars(ranks, cars);
    console.log(`Test Case ${i + 1}:`);
    console.log(`  Input: ranks = ${ranks}, cars = ${cars}`);
    console.log(`  Expected: ${expected}`);
    console.log(`  Actual: ${result}`);
    if (result === expected) {
        console.log('  Status: Passed');
    } else {
        console.log('  Status: Failed');
    }
    console.log('---');
}
