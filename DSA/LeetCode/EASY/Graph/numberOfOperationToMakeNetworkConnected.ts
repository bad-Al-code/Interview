class DisjointSetUnion {
    private readonly parent: number[];
    private readonly rank: number[];
    private componentCount: number;

    constructor(size: number) {
        this.componentCount = size;
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = new Array(size).fill(0);
    }

    public find(i: number): number {
        if (this.parent[i] === i) {
            return i;
        }

        this.parent[i] = this.find(this.parent[i]);

        return this.parent[i];
    }

    public union(i: number, j: number): void {
        const rootI = this.find(i);
        const rootJ = this.find(j);

        if (rootI !== rootJ) {
            if (this.rank[rootI] > this.rank[rootJ]) {
                this.parent[rootJ] = rootI;
            } else if (this.rank[rootJ] > this.rank[rootI]) {
                this.parent[rootI] = rootJ;
            } else {
                this.parent[rootJ] = rootI;
                this.rank[rootI]++;
            }

            this.componentCount--;
        }
    }

    public getComponentCount(): number {
        return this.componentCount;
    }
}

function makeConnected(n: number, connections: number[][]): number {
    if (connections.length < n - 1) return -1;

    const dsu = new DisjointSetUnion(n);
    for (const [u, v] of connections) {
        dsu.union(u, v);
    }

    const numberOfComponent = dsu.getComponentCount();

    return numberOfComponent - 1;
}

export const n1 = 4;
const connections1 = [
    [0, 1],
    [0, 2],
    [1, 2],
];
export const n2 = 6;
const connections2 = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
];
export const n3 = 6;
const connections3 = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
];

console.log(makeConnected(n1, connections1));
console.log(makeConnected(n2, connections2));
console.log(makeConnected(n3, connections3));
