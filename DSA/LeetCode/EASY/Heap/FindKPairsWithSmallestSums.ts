function siftUp(heap: [number, number, number][], i: number): void {
    while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (heap[i][0] < heap[parent][0]) {
            [heap[i], heap[parent]] = [heap[parent], heap[i]];
            i = parent;
        } else {
            break;
        }
    }
}

function siftDown(
    heap: [number, number, number][],
    i: number,
    size: number,
): void {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < size && heap[left][0] < heap[smallest][0]) {
        smallest = left;
    }

    if (right < size && heap[right][0] < heap[smallest][0]) {
        smallest = right;
    }

    if (smallest !== i) {
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        siftDown(heap, smallest, size);
    }
}

function extractMin(
    heap: [number, number, number][],
): [number, number, number] {
    const min = heap[0];
    const last = heap.pop();
    if (heap.length > 0 && last) {
        heap[0] = last;
        siftDown(heap, 0, heap.length);
    }
    return min;
}

function insert(
    heap: [number, number, number][],
    element: [number, number, number],
): void {
    heap.push(element);
    siftUp(heap, heap.length - 1);
}

function minHeapify(heap: [number, number, number][]): void {
    const size = heap.length;
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        siftDown(heap, i, size);
    }
}

function kSmallestPairs(
    nums1: number[],
    nums2: number[],
    k: number,
): number[][] {
    const result: number[][] = [];
    if (nums1.length === 0 || nums2.length === 0 || k === 0) return result;

    const minHeap: [number, number, number][] = []; // [sum, i, j]

    for (let j = 0; j < Math.min(k, nums2.length); j++) {
        minHeap.push([nums1[0] + nums2[j], 0, j]);
    }

    minHeapify(minHeap);

    while (k > 0 && minHeap.length > 0) {
        const [_, i, j] = extractMin(minHeap);
        result.push([nums1[i], nums2[j]]);
        k--;

        if (i + 1 < nums1.length) {
            insert(minHeap, [nums1[i + 1] + nums2[j], i + 1, j]);
        }
    }

    return result;
}
