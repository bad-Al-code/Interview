interface PriorityQueueNode {
    probability: number;
    node: number;
}

class MaxHeap {
    private heap: PriorityQueueNode[] = [];

    public isEmpty(): boolean {
        return this.heap.length === 0;
    }

    public size(): number {
        return this.heap.length;
    }

    public peek(): PriorityQueueNode | null {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    public insert(node: PriorityQueueNode): void {
        this.heap.push(node);
        this.shiftUp(this.heap.length - 1);
    }

    public extractMax(): PriorityQueueNode | null {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop()!;
        }

        const maxNode = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.shiftDown(0);

        return maxNode;
    }

    private shiftUp(index: number): void {
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (
                this.heap[parentIndex].probability >=
                this.heap[index].probability
            ) {
                break;
            }

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    private shiftDown(index: number): void {
        const lastIndex = this.heap.length - 1;
        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let largestIndex = index;

            if (
                leftChildIndex <= lastIndex &&
                this.heap[leftChildIndex].probability >
                    this.heap[largestIndex].probability
            ) {
                largestIndex = leftChildIndex;
            }

            if (
                rightChildIndex <= lastIndex &&
                this.heap[rightChildIndex].probability >
                    this.heap[largestIndex].probability
            ) {
                largestIndex = rightChildIndex;
            }

            if (largestIndex !== index) {
                this.swap(index, largestIndex);
                index = largestIndex;
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

interface NeighborInfo {
    neighbor: number;
    probability: number;
}

type AdjacencyList = NeighborInfo[][];

const buildGraph = (
    n: number,
    edges: number[][],
    succProb: number[],
): AdjacencyList => {
    const graph: AdjacencyList = Array.from({ length: n }, () => []);

    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        const probability = succProb[i];

        if (u < 0 || u >= n || v < 0 || v >= n) {
            console.warn(
                `Edge [${u}, ${v}] contains out-of-bounds node indices for n=${n}. Skipping this edge.`,
            );
            continue;
        }
        if (probability < 0 || probability > 1) {
            console.warn(
                `Edge [${u}, ${v}] has invalid probability ${probability}. Clamping/Skipping or handling as needed.`,
            );
        }

        graph[u].push({ neighbor: v, probability: probability });
        graph[v].push({ neighbor: u, probability: probability });
    }
    return graph;
};

function maxProbability(
    n: number,
    edges: number[][],
    succProb: number[],
    start_node: number,
    end_node: number,
): number {
    if (start_node < 0 || start_node >= n || end_node < 0 || end_node >= n) {
        console.error('Start or end node index out of bounds.');
        return 0;
    }

    if (n <= 0) {
        return 0;
    }

    if (start_node === end_node) {
        return 1.0;
    }

    const graph: AdjacencyList = buildGraph(n, edges, succProb);
    const maxProbability: number[] = Array(n).fill(0.0);
    maxProbability[start_node] = 1.0;
    const priorityQueue = new MaxHeap();
    priorityQueue.insert({ probability: 1.0, node: start_node });

    while (!priorityQueue.isEmpty()) {
        const currentQueueNode = priorityQueue.extractMax();
        if (!currentQueueNode) continue;

        const { probability: currentProb, node: currentNode } =
            currentQueueNode;

        const epsilon = 1e-9;
        if (currentProb < maxProbability[currentNode] - epsilon) {
            continue;
        }

        if (currentNode === end_node) {
            return currentProb;
        }

        for (const neighborInfo of graph[currentNode]) {
            const neighborNode = neighborInfo.neighbor;
            const edgeProb = neighborInfo.probability;

            if (edgeProb === 0) continue;

            const newProb = currentProb * edgeProb;

            if (newProb > maxProbability[neighborNode]) {
                maxProbability[neighborNode] = newProb;
                priorityQueue.insert({
                    probability: newProb,
                    node: neighborNode,
                });
            }
        }
    }

    return maxProbability[end_node];
}
