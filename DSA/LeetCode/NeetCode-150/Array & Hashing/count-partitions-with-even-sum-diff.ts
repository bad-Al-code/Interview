function countPartitions(nums: number[]): number {
    let count = 0;
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        const leftSum = getSum(nums, 0, i + 1);
        const rightSum = getSum(nums, i + 1, n);

        const diff = leftSum - rightSum;

        if (isEven(diff)) count++;
    }

    return count;
}

function isEven(n: number): boolean {
    return n % 2 === 0;
}

function getSum(nums: number[], start: number, end: number): number {
    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += nums[i];
    }

    return sum;
}
