function mergeSorted(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number,
): number[] {
    let p1 = m - 1;
    let p2 = n - 1;
    for (let p = n + m - 1; p > -1; p--) {
        if (p2 < 0) {
            break;
        }

        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1 -= 1;
        } else {
            nums1[p] = nums2[p2];
            p2 -= 1;
        }
    }
    return nums1;
}
