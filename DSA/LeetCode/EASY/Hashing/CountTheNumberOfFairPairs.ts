function countFairPairs(nums: number[], lower: number, upper: number): number {
    nums.filter((num) => num <= upper);

    nums.sort((a, b) => a - b);
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left <= right) {
            let sum = nums[i] + nums[left];

            if (sum >= lower && sum <= upper) {
                count++;
                left++;
            } else if (sum < lower) {
                left++;
            } else {
                right--;
            }
        }
    }

    return count;
}

function optimized(nums: number[], lower: number, upper: number): number {
    let count = 0;
    const freqMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        for (let sum = lower - num; sum <= upper - num; sum++) {
            if (freqMap.has(sum)) {
                count += freqMap.get(sum)!;
            }
        }

        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    return count;
}

export const nums1 = [0, 1, 7, 4, 4, 5],
    lower1 = 3,
    upper1 = 6;
console.log(countFairPairs(nums1, lower1, upper1));
console.log(optimized(nums1, lower1, upper1));

// 1, 2, 5, 7, 9
//
const nums2 = [1, 7, 9, 2, 5],
    lower = 11,
    upper = 11;

console.log(countFairPairs(nums2, lower, upper));
console.log(optimized(nums2, lower, upper));
