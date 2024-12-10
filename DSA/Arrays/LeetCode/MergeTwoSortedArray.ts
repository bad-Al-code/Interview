/**
 * Merges two sorted arrays nums1 and nums2 into nums1 in-place.
 *
 * @param {number[]} nums1 - The first sorted array, which has enough space to hold the elements of nums2.
 * @param {number} m - The number of initialized elements in nums1.
 * @param {number[]} nums2 - The second sorted array.
 * @param {number} n - The number of elements in nums2.
 * @returns {void} This function does not return anything, it modifies nums1 in-place.
 *
 * @example
 * const nums1 = [1, 2, 3, 0, 0, 0];
 * const nums2 = [2, 5, 6];
 * mergeArrays(nums1, 3, nums2, 3);
 * console.log(nums1);
 * // Output: [1, 2, 2, 3, 5, 6]
 */
function mergeArrays(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number,
): void {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

// Time Complexity: O(m + n) - We are iterating through both arrays once
// Space Complexity: O(1) - We are not using extra space beyond the input arrays
