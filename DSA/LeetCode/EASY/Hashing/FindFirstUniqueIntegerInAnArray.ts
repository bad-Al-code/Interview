function findFirstUnique(nums: number[]): number | null {
    const hMap: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        hMap.set(nums[i], (hMap.get(nums[i]) || 0) + 1);
    }
    for (let i = 0; i < nums.length; i++) {
        if (hMap.get(nums[i]) === 1) {
            return nums[i];
        }
    }

    return null;
}

const nums6 = [9, 9, 9, 9, 6, 6];
console.log(findFirstUnique(nums6));
