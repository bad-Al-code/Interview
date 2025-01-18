/**
 * @param {number[]} heap
 * @param {number} i
 * @param {number} size: size of the heap
 */
function minheapify(heap: number[], i: number, size: number): void {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < size && heap[left] < heap[smallest]) {
        smallest = left;
    }

    if (right < size && heap[right] < heap[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        minheapify(heap, smallest, size);
    }
}

/**
 * @param {number[]} heap
 * @param {number} i
 * @param {number} size: size of the heap
 */
function heapify(heap: number[], i: number, size: number): void {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

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
function buildmaxheap(nums: number[]): void {
    const size = nums.length;

    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapify(nums, i, size);
    }
}

/**
 * @param {number[]} nums
 */
function buildminheap(nums: number[]): void {
    const size = nums.length;

    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        minheapify(nums, i, size);
    }
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function findNonMinOrMax(nums: number[]): number {
    if (nums.length <= 2) return -1;

    const minHeap: number[] = [...nums];
    const maxHeap: number[] = [...nums];

    buildminheap(minHeap);
    buildmaxheap(maxHeap);

    const minVal = minHeap[0];
    const maxVal = maxHeap[0];

    for (const num of nums) {
        if (num !== minVal && num !== maxVal) {
            return num;
        }
    }

    return -1;
}

const nums10 = [3, 2, 1, 5, 6, 4];
console.log(`Element that is neither min nor max:`, findNonMinOrMax(nums10));

const nums2 = [1, 2];
console.log(`Element that is neither min nor max:`, findNonMinOrMax(nums2));

const nums3 = [2, 2, 3, 1];
console.log(`Element that is neither min nor max:`, findNonMinOrMax(nums3));
