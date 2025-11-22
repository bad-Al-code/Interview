function minimumOperations(nums: number[]): number {
    const k = 3;
    let totalOps: number = 0;

    for (const num of nums) {
        const ops = getMinOps(num, k);

        totalOps += ops;
    }

    return totalOps;
}

function getMinOps(num: number, k: number): number {
    const rem = num % k;
    if (rem === 0) {
        return 0;
    }

    const sub = rem;
    const add = k - rem;

    return Math.min(sub, add);
}
