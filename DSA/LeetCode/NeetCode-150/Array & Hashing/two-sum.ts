function twoSum(nums: number[], target: number): number[] {
    const indexedNums = nums.map((num, idx) => ({ num, idx }));
    indexedNums.sort((a, b) => a.num - b.num);

    for (let i = 0; i < nums.length; i++) {
        const reminder = target - indexedNums[i].num;
        const found = binarySearch(indexedNums, reminder, i + 1);

        if (found !== -1) {
            return [indexedNums[i].idx, indexedNums[found].idx];
        }
    }

    return [];
}

function binarySearch(
    arr: { num: number; idx: number }[],
    target: number,
    left: number,
): number {
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid].num === target) return mid;
        if (arr[mid].num < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

function twoSumUsingHashMap(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const reminder = target - nums[i];

        if (seen.has(reminder)) {
            return [seen.get(reminder)!, i];
        }

        seen.set(nums[i], i);
    }

    return [];
}
