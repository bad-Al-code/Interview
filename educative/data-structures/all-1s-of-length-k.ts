function kLengthApart(nums: number[], k: number): boolean {
    let count = k;

    for (const i of nums) {
        if (i === 1) {
            if (count < k) return false;

            count = 0;
        } else {
            count++;
        }
    }

    return true;
}

const nums = [1, 0, 0, 1, 0, 1];
const k = 2;

console.log(kLengthApart(nums, k));
