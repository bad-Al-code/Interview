/**
 * @param {number[]} heap
 * @param {number} i
 * @param {number} size: size of the heap
 */
export function heapify(heap: number[], i: number, size: number): void {
    let largest = i;
    let left = 2 * i;
    let right = 2 * i + 1;

    if (left < size && heap[left] > heap[largest]) {
        largest = left;
    }

    if (right < size && heap[right] > heap[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [heap[i], heap[largest]] = [heap[largest], heap[i]];
        heapify(heap, largest, size);
    }
}

/**
 * @param {number[]} nums
 */
export function buildmaxheap(nums: number[]): void {
    const size = nums.length;

    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapify(nums, i, size);
    }
}

/**
 * @param {number[]} nums - input array
 * @param {number} k - 1-indexed
 * @returns {number}
 */
export function findkthlargest(nums: number[], k: number): number {
    if (k <= 0) throw new Error('k must be a positve integer');
    if (k > nums.length) throw new Error('k is out of bounds of the array');
    buildmaxheap(nums);

    let size = nums.length;
    for (let i = 0; i < k - 1; i++) {
        [nums[0], nums[size - 1]] = [nums[size - 1], nums[0]];
        size--;

        heapify(nums, 0, size);
    }

    return nums[0];
}

const nums10 = [3, 2, 1, 5, 6, 4];
const k1 = 2;
console.log(`the ${k1}th largest element is:`, findkthlargest(nums10, k1));
