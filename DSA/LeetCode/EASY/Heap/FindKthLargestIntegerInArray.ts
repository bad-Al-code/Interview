// CHATGPT
function compareStrings(num1: string, num2: string): number {
    // Compare by length first (longer strings represent larger numbers).
    if (num1.length > num2.length) return 1;
    if (num1.length < num2.length) return -1;

    // If the lengths are the same, compare lexicographically.
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
    return 0;
}

/**
 * @param {string[]} heap
 * @param {number} i
 * @param {number} size: size of the heap
 */
function heapify(heap: string[], i: number, size: number): void {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // if (left < size && Number(heap[left]) > Number(heap[largest])) {
    //     largest = left;
    // }

    // if (right < size && Number(heap[right]) > Number(heap[largest])) {
    //     largest = right;
    // }

    if (left < size && compareStrings(heap[left], heap[largest]) > 0) {
        largest = left;
    }

    if (right < size && compareStrings(heap[right], heap[largest]) > 0) {
        largest = right;
    }

    if (largest !== i) {
        [heap[i], heap[largest]] = [heap[largest], heap[i]];
        heapify(heap, largest, size);
    }
}

/**
 * @param {string[]} nums
 */
function buildMaxHeap(nums: string[]): void {
    const size = nums.length;

    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapify(nums, i, size);
    }
}

/**
 * @param {string[]} nums - input array of strings
 * @param {number} k - 1-indexed
 * @returns {string}
 */
function kthLargestNumber(nums: string[], k: number): string {
    buildMaxHeap(nums);

    let size = nums.length;
    for (let i = 0; i < k - 1; i++) {
        [nums[0], nums[size - 1]] = [nums[size - 1], nums[0]];
        size--;

        heapify(nums, 0, size);
    }

    return nums[0];
}
