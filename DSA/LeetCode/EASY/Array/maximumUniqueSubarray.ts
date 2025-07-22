function maximumUniqueSubarray(nums: number[]): number {
    let left = 0;
    let maxSum = 0;
    let currentSum = 0;
    const seenElements = new Set<number>();

    for (let right = 0; right < nums.length; right++) {
        const newNum = nums[right];

        while (seenElements.has(newNum)) {
            const leftMostNum = nums[left];
            seenElements.delete(leftMostNum);
            currentSum -= leftMostNum;
            left++;
        }

        seenElements.add(newNum);
        currentSum += newNum;

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));
