function subsetCal(
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
    subsetCal(start + 1, nums, subsets, current);
    current.pop();

    while (start + 1 < nums.length && nums[start] === nums[start + 1]) {
        start++;
    }

    subsetCal(start + 1, nums, subsets, current);
}

function subsetsWithDuplicate(nums: number[]): number[][] {
    const subsets: number[][] = [];
    const current: number[] = [];

    nums.sort((a, b) => a - b);
    subsetCal(0, nums, subsets, current);

    return subsets;
}
