/**
 * @param {number[]} heap
 * @param {number} i - index
 * @param {number} size
 */
function heapify(heap: number[], i: number, size: number): void {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < size && heap[left] < heap[smallest]) {
        smallest = left;
    }

    if (right < size && heap[right] < heap[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
    }
}

/**
 * @param {number[]} arr
 */
export function minHeap(arr: number[]): void {
    const size = arr.length;

    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapify(arr, i, size);
    }
}

/**
 * @param {number[]} arr - input arr
 * @param {number} k
 * @returns {number[]} all k smallest element
 *
 * @throws {Error} If k is out of boundds
 */
function findKSmallest(arr: number[], k: number): number[] {
    if (k <= 0) {
        throw new Error('k must be greater than 0.');
    }

    if (k > arr.length) {
        console.warn(
            'k is greater than the array length. Returning all elements sorted.',
        );
        return arr.sort((a, b) => a - b);
    }

    const result: number[] = [];

    minHeap(arr);

    let size = arr.length;

    for (let i = 0; i < k; i++) {
        result.push(arr[0]);
        [arr[0], arr[size - 1]] = [arr[size - 1], arr[0]];
        size--;

        heapify(arr, 0, size);
    }

    return result;
}

const nums10 = [3, 2, 1, 5, 6, 4];
const k1 = 19;
console.log(`kth smallest element are:`, findKSmallest(nums10, k1));
