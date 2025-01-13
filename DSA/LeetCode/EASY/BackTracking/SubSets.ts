function subsetCalculate(
    start: number,
    nums: number[],
    subsets: number[][],
    current: number[],
): void {
    if (start >= nums.length) {
        subsets.push([...current]);
        return;
    }
    current.push(nums[start]);
    subsetCalculate(start + 1, nums, subsets, current);
    current.pop();

    subsetCalculate(start + 1, nums, subsets, current);
}

function subsetsWithoutDuplicate(nums: number[]): number[][] {
    const subsets: number[][] = [];
    const current: number[] = [];

    subsetCalculate(0, nums, subsets, current);
    return subsets;
}
