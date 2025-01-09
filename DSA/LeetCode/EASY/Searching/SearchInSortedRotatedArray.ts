function modifiedBinarySearch(
    nums: number[],
    left: number,
    right: number,
    target: number,
) {
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) {
            //left side sorted
            if (nums[mid] > target && nums[left] <= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[right] >= target && nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}
function search(nums: number[], target: number): number {
    return modifiedBinarySearch(nums, 0, nums.length - 1, target);
}
