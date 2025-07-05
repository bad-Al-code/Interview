enum State {
    UNKNOWN,
    VISITING,
    SAFE,
    UNSAFE,
}

class SafeNodeFinder {
    private readonly graph: number[][];
    private readonly numNodes: number;
    private readonly states: State[];

    constructor(graph: number[][]) {
        this.graph = graph;
        this.numNodes = graph.length;
        this.states = this.initializeStates();
    }

    private initializeStates(): State[] {
        return new Array(this.numNodes).fill(State.UNKNOWN);
    }

    public findSafeNodes(): number[] {
        const safeNodesResult: number[] = [];
        for (let i = 0; i < this.numNodes; i++) {
            if (this.isNodeSafe(i)) {
                safeNodesResult.push(i);
            }
        }
        return safeNodesResult;
    }

    private isNodeSafe(node: number): boolean {
        if (this.states[node] === State.SAFE) return true;
        if (this.states[node] === State.UNSAFE) return false;

        if (this.states[node] === State.VISITING) {
            return false;
        }

        this.states[node] = State.VISITING;

        for (const neighbor of this.graph[node]) {
            if (!this.isNodeSafe(neighbor)) {
                this.states[node] = State.UNSAFE;
                return false;
            }
        }

        this.states[node] = State.SAFE;
        return true;
    }
}

function eventualSafeNodes(graph: number[][]): number[] {
    const finder = new SafeNodeFinder(graph);
    return finder.findSafeNodes();
}

export const graph1 = [[1, 2], [2, 3], [5], [0], [5], [], []];
console.log(`For graph: ${JSON.stringify(graph1)}`);
console.log('Safe nodes:', eventualSafeNodes(graph1));

const graph2 = [[1, 2], [3], [3], []];
console.log(`\nFor graph: ${JSON.stringify(graph2)}`);
console.log('Safe nodes:', eventualSafeNodes(graph2));
