interface HeapNode {
  time: number; node: number;
}

class MinHeap {
  private heap: HeapNode[] = [];

  public isEmpty(): boolean {
    return this.heap.length === 0;
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
      if (this.heap[parentIndex].time <= this.heap[index].time) {
        break;
      }
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

      if (leftChildIndex <= lastIndex && this.heap[leftChildIndex].time < this.heap[smallestIndex].time) {
        smallestIndex = leftChildIndex;
      }
      if (rightChildIndex <= lastIndex && this.heap[rightChildIndex].time < this.heap[smallestIndex].time) {
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

interface NeighborNode {
  neighbor: number;
  time: number;
}

export type AdjacencyList = NeighborNode[][];

const MOD = 1_000_000_007;

class ShortestPathCounter {
  private readonly n: number;
  private readonly graph: AdjacencyList;
  private readonly minTimes: number[];
  private readonly pathCounts: number[];
  private readonly priorityQueue: MinHeap;

  constructor(n: number, roads: number[][]) {
    this.n = n;
    this.graph = this._buildGraph(n, roads);
    this.minTimes = Array(n).fill(Infinity);
    this.pathCounts = Array(n).fill(0);
    this.priorityQueue = new MinHeap();

    this.minTimes[0] = 0;
    this.pathCounts[0] = 1;
  }

  public countShortestPaths(): number {
    this.priorityQueue.insert({ time: 0, node: 0 });

    while (!this.priorityQueue.isEmpty()) {
      const { time: currentTime, node: currentNode } = this.priorityQueue.extractMin()!;

      if (currentTime > this.minTimes[currentNode]) {
        continue;
      }

      for (const { neighbor: nextNode, time: edgeTime } of this.graph[currentNode]) {
        const newTime = currentTime + edgeTime;

        if (newTime < this.minTimes[nextNode]) {
          this.minTimes[nextNode] = newTime;

          this.pathCounts[nextNode] = this.pathCounts[currentNode];
          this.priorityQueue.insert({ time: newTime, node: nextNode });
        } else if (newTime === this.minTimes[nextNode]) {
          this.pathCounts[nextNode] = (this.pathCounts[nextNode] + this.pathCounts[currentNode]) % MOD;
        }
      }
    }

    const destinationNodes = this.n - 1;
    return this.pathCounts[destinationNodes];

  }

  private _buildGraph(n: number, roads: number[][]): AdjacencyList {
    const adj: AdjacencyList = Array.from({ length: n }, () => []);
    for (const [u, v, time] of roads) {
      if (u >= 0 && u < n && v >= 0 && v < n && time >= 0) {
        adj[u].push({ neighbor: v, time: time });
        adj[v].push({ neighbor: u, time: time });
      }

    }

    return adj;
  }
}

function countPaths(n: number, roads: number[][]): number {
  if (n <= 1) { return 1; }
  if (!roads || !Array.isArray(roads)) {
    console.error("Invalid roads input.");
    return 0;
  }

  try {
    const counter = new ShortestPathCounter(n, roads);
    return counter.countShortestPaths();
  } catch (error) {
    console.error("Error during path counting:", error);
    return 0;
  }
}

const n1 = 7;
const roads1 = [[0, 6, 7], [0, 1, 2], [1, 2, 3], [1, 3, 3], [6, 3, 3], [3, 5, 1], [6, 5, 1], [2, 5, 1], [0, 4, 5], [4, 6, 2]];
console.log(`Example 1 Ways: ${countPaths(n1, roads1)}`);

const n2 = 2;
const roads2 = [[1, 0, 10]];
console.log(`Example 2 Ways: ${countPaths(n2, roads2)}`)