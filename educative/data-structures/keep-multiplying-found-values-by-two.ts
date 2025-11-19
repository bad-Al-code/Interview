function findFinalValue(nums: number[], original: number): number {
    nums.sort((a, b) => a - b);

    let curr = original;

    while (binarySearch(nums, curr)) {
        curr *= 2;
    }

    return curr;
}

function binarySearch(nums: number[], target: number): boolean {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const val = nums[mid];

        if (val === target) {
            return true;
        } else if (val < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return false;
}

function findFinalValueUsingSets(nums: number[], original: number): number {
    const numSet = createSet(nums);
    let curr = original;

    while (numSet.has(curr)) {
        curr *= 2;
    }

    return curr;
}

function createSet(nums: number[]): Set<number> {
    return new Set(nums);
}

const nums = [5, 3, 6, 1, 12];
const original = 3;

console.log(findFinalValue(nums, original));
console.log(findFinalValueUsingSets(nums, original));
