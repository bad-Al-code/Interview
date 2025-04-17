interface HeapNode {
    time: number;
    row: number;
    col: number;
}

class MinHeap {
    private heap: HeapNode[] = [];

    public isEmpty(): boolean {
        return this.heap.length === 0;
    }
    public size(): number {
        return this.heap.length;
    }
    public peek(): HeapNode | null {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    public insert(node: HeapNode): void {
        this.heap.push(node);
        this.siftUp(this.heap.length - 1);
    }

    public extractMin(): HeapNode | null {
        if (this.isEmpty()) return null;
        this.swap(0, this.heap.length - 1);
        const minNode = this.heap.pop();
        if (!this.isEmpty()) this.siftDown(0);
        return minNode!;
    }

    private siftUp(index: number): void {
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex].time <= this.heap[index].time) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    private siftDown(index: number): void {
        const lastIndex = this.heap.length - 1;
        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let smallestIndex = index;

            if (
                leftChildIndex <= lastIndex &&
                this.heap[leftChildIndex].time < this.heap[smallestIndex].time
            ) {
                smallestIndex = leftChildIndex;
            }
            if (
                rightChildIndex <= lastIndex &&
                this.heap[rightChildIndex].time < this.heap[smallestIndex].time
            ) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex !== index) {
                this.swap(index, smallestIndex);
                index = smallestIndex;
            } else {
                break;
            }
        }
    }

    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private getLeftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    private getRightChildIndex(index: number): number {
        return 2 * index + 2;
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

class SwimPathfinder {
    private readonly grid: number[][];
    private readonly n: number;
    private readonly minTime: number[][];
    private readonly priorityQueue: MinHeap;
    private readonly directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ]; // N, S, W, E

    constructor(grid: number[][]) {
        this.grid = grid;
        this.n = grid.length;
        this.minTime = Array.from({ length: this.n }, () =>
            Array(this.n).fill(Infinity),
        );
        this.priorityQueue = new MinHeap();
    }

    public findMinTime(): number {
        if (this.n === 1) {
            return this.grid[0][0];
        }

        const startTime = this.grid[0][0];
        this.minTime[0][0] = startTime;
        this.priorityQueue.insert({ time: startTime, row: 0, col: 0 });

        while (!this.priorityQueue.isEmpty()) {
            const currentNode = this.priorityQueue.extractMin();

            if (!currentNode) continue;

            const { time: currentTime, row, col } = currentNode;

            if (currentTime > this.minTime[row][col]) {
                continue;
            }

            if (row === this.n - 1 && col === this.n - 1) {
                return currentTime;
            }

            this._exploreNeighbors(currentNode);
        }

        return -1;
    }

    private _exploreNeighbors(currentNode: HeapNode): void {
        const { time: currentTime, row, col } = currentNode;

        for (const [dr, dc] of this.directions) {
            const nextRow = row + dr;
            const nextCol = col + dc;

            if (this._isValid(nextRow, nextCol)) {
                const timeToReachNeighbor = Math.max(
                    currentTime,
                    this.grid[nextRow][nextCol],
                );

                if (timeToReachNeighbor < this.minTime[nextRow][nextCol]) {
                    this.minTime[nextRow][nextCol] = timeToReachNeighbor;
                    this.priorityQueue.insert({
                        time: timeToReachNeighbor,
                        row: nextRow,
                        col: nextCol,
                    });
                }
            }
        }
    }

    private _isValid(r: number, c: number): boolean {
        return r >= 0 && r < this.n && c >= 0 && c < this.n;
    }
}

function swimInWater(grid: number[][]): number {
    if (!grid || grid.length === 0 || grid[0].length !== grid.length) {
        console.error('Invalid grid provided.');
        return -1;
    }

    const pathfinder = new SwimPathfinder(grid);

    return pathfinder.findMinTime();
}

const grid1 = [
    [0, 2],
    [1, 3],
];
console.log(`Example 1: Least time = ${swimInWater(grid1)}`);

const grid2 = [
    [0, 1, 2, 3, 4],
    [24, 23, 22, 21, 5],
    [12, 13, 14, 15, 16],
    [11, 17, 18, 19, 20],
    [10, 9, 8, 7, 6],
];
console.log(`Example 2: Least time = ${swimInWater(grid2)}`);
