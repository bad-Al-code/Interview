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
}

export default Heap;
