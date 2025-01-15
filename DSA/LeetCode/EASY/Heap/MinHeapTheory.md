# Min Heap

- key at the parent node is always smaller than the keys at the child nodes.
- can be implemented using arrays.

- Initially, elements are placed in the nodes in the same order as they appear in the array.
- function is called over the whole heap in the bottom-up manner that **"Min Heapifies"** or _"percolate up"_ on this heap -> so heap (order) property is restore.

- The _“Min Heapify”_ function is bottom-up because it starts comparing and swapping parent-child key values from the last parent.

---

### Insertion

- create a new child node at the end of the heap
- place the new key at that node (appendit to the array)
- percolate up until root node is reached and heap order property is satisifed.

---

### Removal

- delete the root node
- move the key of the last cild node to the root
- percolate down: if key is larger than the key at any child node, swap values
- repeat until leaf node is found

```typescript
class Heap {
    private heap: number[];

    constructor() {
        this.heap = [];
        this.heap.push(0); // make heap 1-indexed
    }

    /**
     * Insert a value into the heap
     * @param {number} val - value to be inserted into the heap
     */
    push(val: number): void {
        this.heap.push(val);
        let i = this.heap.length - 1;

        // percolate up
        while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
            const parentIndex = Math.floor(i / 2);
            [this.heap[i], this.heap[parentIndex]] = [
                this.heap[parentIndex],
                this.heap[i],
            ];

            i = parentIndex;
        }
    }
    /**
     * Removes and returns the smallest value in the heap
     * @returns {number} - samllest value in heap, or -1 if heap is empty
     */
    pop(): number {
        if (this.heap.length === 1) return -1;

        if (this.heap.length === 2) return this.heap.pop()!;

        const result = this.heap[1];
        this.heap[1] = this.heap.pop()!;
        let i = 1;

        // pervolate down
        while (2 * i < this.heap.length) {
            const leftChild = 2 * i;
            const rightChild = 2 * i + 1;
            let smallerChild = leftChild;

            if (
                rightChild < this.heap.length &&
                this.heap[rightChild] < this.heap[leftChild]
            ) {
                smallerChild = rightChild;
            }

            if (this.heap[i] > this.heap[smallerChild]) {
                [this.heap[i], this.heap[smallerChild]] = [
                    this.heap[smallerChild],
                    this.heap[i],
                ];
                i = smallerChild;
            } else {
                break;
            }
        }

        return result;
    }

    /**
     * Convert an array into a heap in-place
     * @param {number[]} arr - the array to be heapified
     */
    heapify(arr: number[]): void {
        arr.push(arr[0]); // move 0-th indexed element to end to make 1indexed

        this.heap = arr;
        let cur = Math.floor((this.heap.length - 1) / 2);

        while (cur > 0) {
            // percolate down
            let i = cur;

            while (2 * i < this.heap.length) {
                const leftChild = 2 * i;
                const rightChild = 2 * i + 1;

                if (
                    rightChild < this.heap.length &&
                    this.heap[rightChild] < this.heap[leftChild] &&
                    this.heap[i] > this.heap[rightChild]
                ) {
                    [this.heap[i], this.heap[rightChild]] = [
                        this.heap[rightChild],
                        this.heap[i],
                    ];
                    i = rightChild;
                } else if (this.heap[i] > this.heap[leftChild]) {
                    [this.heap[i], this.heap[leftChild]] = [
                        this.heap[leftChild],
                        this.heap[i],
                    ];
                    i = leftChild;
                } else {
                    break;
                }
            }
            cur--;
        }
    }
}
```

- This code is reflection of the code for max heap.
