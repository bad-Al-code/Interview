export class UnionFind {
    private parent: number[];
    private rank: number[];

    constructor(size: number) {
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
            } else if (this.rank[rootI] < this.rank[rootJ]) {
                this.parent[rootI] = rootJ;
            } else {
                this.parent[rootJ] = rootI;
                this.rank[rootI]++;
            }
        }
    }
}

function findRedundantConnection(edges: number[][]): number[] {
    let n = 0;
    for (const edge of edges) {
        n = Math.max(n, edge[0], edge[1]);
    }

    const uf = new UnionFind(n + 1);

    for (const edge of edges) {
        const [u, v] = edge;

        if (uf.find(u) === uf.find(v)) {
            return edge;
        } else {
            uf.union(u, v);
        }
    }

    return [];
}

const edges1 = [
    [1, 2],
    [1, 3],
    [2, 3],
];
const edges2 = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 5],
];

console.log(findRedundantConnection(edges1));
console.log(findRedundantConnection(edges2));
