function createPrefixSum(nums: number[]): number[] {
    const n = nums.length;

    const prefixSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    return prefixSum;
}

function maximumUniqueSubarray(nums: number[]): number {
    const prefixSum = createPrefixSum(nums);
    let left = 0;
    let maxSum = 0;

    const lastSeenIndex = new Map<number, number>();
    for (let right = 0; right < nums.length; right++) {
        const newNum = nums[right];

        if (lastSeenIndex.has(newNum)) {
            const prevIndex = lastSeenIndex.get(newNum)!;
            left = Math.max(left, prevIndex + 1);
        }

        lastSeenIndex.set(newNum, right);

        const currentWindowSum = prefixSum[right + 1] - prefixSum[left];

        maxSum = Math.max(maxSum, currentWindowSum);
    }

    return maxSum;
}

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));
