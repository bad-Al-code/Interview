/**
 * Finds a peak element in the array using binary search.
 *
 * @param {number[]} nums - The input array.
 * @returns {number} - The index of a peak element.
 *
 * @example
 * const nums = [1, 2, 3, 1];
 * console.log(findPeakElement(nums)); // Output: 2
 *
 * @logic
 * - Use binary search to find an element where `nums[mid] > nums[mid + 1]`.
 * - Adjust the search range based on the comparison of `nums[mid]` and `nums[mid + 1]`.
 *
 * @timeComplexity O(log n) - Binary search halves the array at each step.
 * @spaceComplexity O(1) - No additional space used.
 */
function findPeakElement(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

const nums = [1, 2, 3, 1];
console.log(findPeakElement(nums));
