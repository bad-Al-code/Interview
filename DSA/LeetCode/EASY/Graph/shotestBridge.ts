export class SimpleQueue<T> {
    private items: T[] = [];
    private head: number = 0;
    enqueue(item: T): void {
        this.items.push(item);
    }
    dequeue(): T | undefined {
        if (this.isEmpty()) return undefined;
        const item = this.items[this.head++];

        if (this.head * 2 >= this.items.length && this.head > 100) {
            this.items = this.items.slice(this.head);
            this.head = 0;
        }

        return item;
    }

    isEmpty(): boolean {
        return this.head >= this.items.length;
    }
    size(): number {
        return this.items.length - this.head;
    }

    peek(): T | undefined {
        return this.isEmpty() ? undefined : this.items[this.head];
    }
}

type Coordinate = [number, number];
type BfsQueueItem = [number, number, number];

class BridgeFinder {
    private readonly grid: number[][];
    private readonly rows: number;
    private readonly cols: number;
    private readonly visited: Set<string>;
    private readonly bfsQueue: SimpleQueue<BfsQueueItem>;
    private readonly directions: Coordinate[] = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    constructor(grid: number[][]) {
        this.grid = grid;
        this.rows = grid.length;
        this.cols = grid[0].length;
        this.visited = new Set<string>();
        this.bfsQueue = new SimpleQueue<BfsQueueItem>();
    }

    public findShotestBridgeLength(): number {
        const foundIsland = this._findAndMarkFirstIsland();
        if (!foundIsland) {
            console.error(
                'Could not find the first island (problem constrains violated.',
            );

            return -1;
        }

        const bridgeLength = this._performBFSForBridge();
        return bridgeLength;
    }

    private _findAndMarkFirstIsland(): boolean {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (this.grid[r][c] === 1) {
                    this._dfsIslandSearch(r, c);
                    return true;
                }
            }
        }

        return false;
    }

    private _dfsIslandSearch(r: number, c: number): void {
        if (
            !this._isValid(r, c) ||
            this.grid[r][c] === 0 ||
            this.visited.has(this._coordToString(r, c))
        ) {
            return;
        }

        this.visited.add(this._coordToString(r, c));
        this.bfsQueue.enqueue([r, c, 0]);

        for (const [dr, dc] of this.directions) {
            this._dfsIslandSearch(r + dr, c + dc);
        }
    }

    private _performBFSForBridge(): number {
        while (!this.bfsQueue.isEmpty()) {
            const [r, c, distance] = this.bfsQueue.dequeue()!;

            for (const [dr, dc] of this.directions) {
                const nr = r + dr;
                const nc = c + dc;
                const neighborCoorStr = this._coordToString(nr, nc);

                if (
                    this._isValid(nr, nc) &&
                    !this.visited.has(neighborCoorStr)
                ) {
                    if (this.grid[nr][nc] === 1) {
                        return distance;
                    }

                    this.visited.add(neighborCoorStr);
                    this.bfsQueue.enqueue([nr, nc, distance + 1]);
                }
            }
        }

        console.error('BFS completed withot finding the second island.');
        return -1;
    }

    private _isValid(r: number, c: number): boolean {
        return r >= 0 && r < this.rows && c >= 0 && c < this.cols;
    }

    private _coordToString(r: number, c: number): string {
        return `${r},${c}`;
    }
}

function shortestBridge(grid: number[][]): number {
    if (!grid || grid.length === 0 || !grid[0] || grid[0].length === 0) {
        console.error('Invalid grid provvided.');
        return -1;
    }

    if (grid.length !== grid[0].length) {
        console.warn('Grid is not square, processding anyway');
    }

    try {
        const finder = new BridgeFinder(grid);
        return finder.findShotestBridgeLength();
    } catch (error) {
        console.error('An error occured during bridge finding.');
        return -1;
    }
}

const grid1 = [
    [0, 1],
    [1, 0],
];
console.log(`Example 1 Bridge Length: ${shortestBridge(grid1)}`);

const grid2 = [
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1],
];
console.log(`Example 2 Bridge Length: ${shortestBridge(grid2)}`);

const grid3 = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
];
console.log(`Example 3 Bridge Length: ${shortestBridge(grid3)}`);
