function maxProduct(nums: number[]): number {
    let maxProduct = Number.MIN_SAFE_INTEGER;
    let currentProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        currentProduct *= nums[i];
        maxProduct = Math.max(maxProduct, currentProduct);
        if (currentProduct === 0) currentProduct = 1;
    }

    currentProduct = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        currentProduct *= nums[i];
        maxProduct = Math.max(maxProduct, currentProduct);
        if (currentProduct === 0) currentProduct = 1;
    }

    return maxProduct;
}
