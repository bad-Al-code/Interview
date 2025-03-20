class UnionFind {
    private parent: number[];
    private rank: number[];
    private weight: number[];

    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
        this.weight = new Array(n).fill((1 << 17) - 1); // 2^17 - 1 is the minimum number > 10^5
    }

    find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(u: number, v: number, w: number): void {
        const rootU = this.find(u);
        const rootV = this.find(v);
        const newWeight = this.weight[rootU] & this.weight[rootV] & w;
        this.weight[rootU] = newWeight;
        this.weight[rootV] = newWeight;

        if (rootU === rootV) return;

        if (this.rank[rootU] < this.rank[rootV]) {
            this.parent[rootU] = rootV;
        } else if (this.rank[rootU] > this.rank[rootV]) {
            this.parent[rootV] = rootU;
        } else {
            this.parent[rootV] = rootU;
            this.rank[rootU]++;
        }
    }

    getMinCost(u: number, v: number): number {
        if (u === v) return 0;
        const rootU = this.find(u);
        const rootV = this.find(v);
        return rootU === rootV ? this.weight[rootU] : -1;
    }
}

function minimumCost(
    n: number,
    edges: number[][],
    queries: number[][],
): number[] {
    const uf = new UnionFind(n);

    for (const [u, v, w] of edges) {
        uf.union(u, v, w);
    }

    return queries.map(([u, v]) => uf.getMinCost(u, v));
}
