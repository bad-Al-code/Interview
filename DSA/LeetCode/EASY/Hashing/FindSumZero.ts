function findSubZero(nums: number[]): boolean {
    let hMap: Map<number, number> = new Map();
    let sum = 0;

    for (let num = 0; num < nums.length; num++) {
        sum += nums[num];

        if (sum === 0 || nums[num] === 0 || hMap.has(sum)) {
            return true;
        }

        hMap.set(sum, num);
    }
    return false;
}

const nums4 = [6, 4, -7, 4, -12, 9];
console.log(findSubZero(nums4));
