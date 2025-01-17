/**
 * @param nums - Array of integers.
 * @param target - The target sum.
 * @returns An array of two indices whose values sum up to the target.
 */
export function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }

    throw new Error('No solution found');
}
