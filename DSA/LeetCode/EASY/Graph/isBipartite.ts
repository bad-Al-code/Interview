/**
 * @param { number[][] } graph
 * @returns { boolean }
 */
function isBipartite(graph: number[][]): boolean {
    const graphLength = graph.length;
    const colors = new Array(graphLength).fill(0);

    const dfs = (node: number, color: number): boolean => {
        if (colors[node] !== 0) {
            return colors[node] === color;
        }

        colors[node] = color;

        for (const neighbor of graph[node]) {
            if (!dfs(neighbor, -color)) {
                return false;
            }
        }

        return true;
    };

    for (let i = 0; i < graphLength; i++) {
        if (colors[i] === 0 && !dfs(i, 1)) {
            return false;
        }
    }

    return true;
}

const graph1 = [
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
];
const graph2 = [
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
];

console.log(isBipartite(graph1));
console.log(isBipartite(graph2));
