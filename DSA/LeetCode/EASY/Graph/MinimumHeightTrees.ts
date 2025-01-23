function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const adjList = new Map<number, Set<number>>();

    for (const [a, b] of edges) {
        if (!adjList.has(a)) adjList.set(a, new Set());
        if (!adjList.has(b)) adjList.set(b, new Set());
        adjList.get(a)!.add(b);
        adjList.get(b)!.add(a);
    }

    let leaves: number[] = [];
    for (const [node, neighbors] of adjList) {
        if (neighbors.size === 1) leaves.push(node);
    }

    let remainingNodes = n;
    while (remainingNodes > 2) {
        remainingNodes -= leaves.length;
        const newLeaves: number[] = [];

        for (const leaf of leaves) {
            const neighbor = Array.from(adjList.get(leaf)!)[0];
            adjList.get(neighbor)!.delete(leaf);
            adjList.delete(leaf);

            if (adjList.get(neighbor)!.size === 1) {
                newLeaves.push(neighbor);
            }
        }

        leaves = newLeaves;
    }

    return leaves;
}

export const n = 6;
const edges = [
    [0, 3],
    [1, 3],
    [2, 3],
    [4, 3],
    [5, 4],
];
console.log(findMinHeightTrees(n, edges));

const n2 = 4;
const edges2 = [
    [1, 0],
    [1, 2],
    [1, 3],
];
console.log(findMinHeightTrees(n2, edges2));

const n3 = 1;
const edges3: number[][] = [];
console.log(findMinHeightTrees(n3, edges3));
