/**
 * Given an integer array `nums` of length `n`, creates an array `ans` of length `2n` such that:
 * - ans[i] == nums[i] for 0 <= i < n.
 * - ans[i + n] == nums[i] for 0 <= i < n.
 *
 * Specifically, the result is the concatenation of the `nums` array with itself.
 *
 * @param {number[]} nums - The input array of integers.
 * @returns {number[]} The concatenated array of length `2n`.
 *
 * @example
 * const nums = [1, 2, 3];
 * console.log(getConcatenation(nums));
 * // Output: [1, 2, 3, 1, 2, 3]
 */

function getConcatenation(nums: number[]): number[] {
    const n = nums.length;
    const newArr = new Array(2 * n);

    for (let i = 0; i < n; i++) {
        newArr[i] = nums[i];
        newArr[i + n] = nums[i];
    }

    return newArr;
}

// Time Complexity: O(n) - We iterate through the nums array once
// Space Complexity: O(n) - The new array has a size of 2n

// Other way
// returns nums.concat(nums);
// time and sapce remains same
