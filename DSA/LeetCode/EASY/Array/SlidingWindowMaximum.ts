/**
 * Finds the maximum value in each sliding window of size `k` for the given array.
 *
 * @param {number[]} nums - The input array of numbers.
 * @param {number} k - The size of the sliding window.
 * @returns {number[]} - An array of the maximum values for each sliding window.
 *
 * @example
 * const nums = [1, 3, -1, -3, 5, 3, 6, 7];
 * const k = 3;
 * const result = maxSlidingWindow(nums, k);
 * console.log(result); // Output: [3, 3, 5, 5, 6, 7]
 *
 * @logic
 * 1. Use a hashmap to keep track of the frequency of elements in the current window.
 * 2. Maintain two pointers `L` (left) and `R` (right) to represent the sliding window.
 * 3. Update the hashmap as elements enter or leave the window.
 * 4. Use `maxElement` to keep track of the maximum element in the current window:
 *    - If the current maximum element is removed from the window, recalculate the maximum.
 * 5. Once the window reaches the required size (`k`), add `maxElement` to the output array.
 *
 * @timeComplexity O(n) - Each element is processed at most twice (entering and leaving the window).
 * @spaceComplexity O(k) - The size of the hashmap is proportional to the window size.
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
    if (nums.length === 0 || k === 0) return [];

    const hashMap: Map<number, number> = new Map();
    let L = 0;
    let maxElement = nums[0];
    const output: number[] = [];

    for (let R = 0; R < nums.length; R++) {
        hashMap.set(nums[R], (hashMap.get(nums[R]) || 0) + 1);

        maxElement = Math.max(maxElement, nums[R]);

        if (R - L + 1 > k) {
            hashMap.set(nums[L], hashMap.get(nums[L])! - 1);
            if (hashMap.get(nums[L]) === 0) {
                hashMap.delete(nums[L]);
            }

            L++;

            if (!hashMap.has(maxElement)) {
                maxElement = nums[L];
                for (let [key] of hashMap) {
                    maxElement = Math.max(maxElement, key);
                }
            }
        }

        if (R - L + 1 === k) {
            output.push(maxElement);
        }
    }

    return output;
}
