/**
 * Recursively ensures the min-heap property at a given node `i`
 * Compares the node with its children and swaps it with the smallest child if neeeded.
 * Continues downlwards until the subtree rooted at i satisifies the min-hwap property.
 *
 * @param {number[]} heap
 * @param {number} i - index of current node
 * @param {number} size - size of the heap
 */
function minHeapify(heap: number[], i: number, size: number): void {
    let smallest = i;
    const left = 2 * i;
    const right = 2 * i + 1;

    if (left < size && heap[left] < heap[smallest]) {
        smallest = left;
    }

    if (right < size && heap[right] < heap[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        minHeapify(heap, smallest, size);
    }
}

/**
 * Iterate from last non-leaf node to the root.
 *
 * @param {number[]} maxHeap - max heap array to be converted
 * @returns {number[]} Converted Min Heap
 */
function convertMax(maxHeap: number[]): number[] {
    const size = maxHeap.length;

    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        minHeapify(maxHeap, i, size);
    }

    return maxHeap;
}

const maxHeap = [50, 30, 40, 10, 20, 35, 15];
console.log('Original Max Heap:', maxHeap);
const minHeap = convertMax(maxHeap);
console.log('Converted Min Heap:', minHeap);

/**
 * Time:
 * 	- minHeapify() - O(logn) for a  single node
 * 	- convertMax() - calls for n/2 nodes, resulting in a totatl time complexity of O(n);
 */
