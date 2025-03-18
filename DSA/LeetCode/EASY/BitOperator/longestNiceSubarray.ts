function longestNiceSubarray(nums: number[]): number {
    let res = 0;
    let cur = 0;
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        while (cur & nums[r]) {
            cur = cur ^ nums[l];
            l += 1;
        }

        res = Math.max(res, r - l + 1);
        cur = cur ^ nums[r];
    }

    return res;
}
