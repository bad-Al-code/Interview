/**
 * @param nums - Array of integers.
 * @returns true if there is a duplicate, false otherwise.
 */
export function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();

    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }

    return false;
}
