function findSum(nums: number[], val: number): number[] {
    let hMap: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        let remaining = val - nums[i];

        if (hMap.has(remaining)) {
            return [remaining, nums[i]];
        }

        hMap.set(nums[i], i);
    }

    return [];
}

const nums5 = [1, 21, 3, 14, 5, 60, 7, 6];
let value = 81;

console.log(findSum(nums5, value));
