/**
 * Calculates the XOR of all pairings between elements in nums1 and nums2.
 * The bitwise XOR of all possible pairings between nums1[i] and nums2[j] is calculated.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 *
 * @logic
 * Each element in nums1 is paired with each element in nums2.
 * Instead of manually iterating through all pairs, we can leverage the fact that
 * the elements in each array contribute to the XOR result based on the odd/even nature
 * of the length of the arrays. If the length is odd, all elements contribute, otherwise
 * they don't contribute.
 */
function xorAllNums(nums1: number[], nums2: number[]): number {
    let res = 0;

    if (nums2.length % 2 === 1) {
        for (let i = 0; i < nums1.length; i++) {
            res ^= nums1[i];
        }
    }

    if (nums1.length % 2 === 1) {
        for (let i = 0; i < nums2.length; i++) {
            res ^= nums2[i];
        }
    }

    return res;
}
