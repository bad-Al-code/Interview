function specialTriplets(nums: number[]): number {
    let count = 0;

    const n = nums.length;
    const MOD = 1_000_000_007;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                const middle = nums[j] * 2;
                if (nums[i] === middle && nums[k] === middle) {
                    count = (count + 1) % MOD;
                }
            }
        }
    }

    return count;
}
