function minCapability(nums: number[], k: number): number {
    function canRob(cap: number): boolean {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= cap) {
                count++;
                i++; // Skip the adjacent house
            }
            if (count >= k) return true;
        }
        return false;
    }

    let low = Math.min(...nums);
    let high = Math.max(...nums);

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (canRob(mid)) {
            high = mid; // Try a lower capability
        } else {
            low = mid + 1; // Increase capability
        }
    }

    return low;
}
