/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 *
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 *
 */

/**
	* CONSTRAINTS 
	*
	* The number of nodes in the graph is in the range [0, 100].
		1 <= Node.val <= 100
		Node.val is unique for each node.
		There are no repeated edges and no self-loops in the graph.
		The Graph is connected and all nodes can be visited starting from the given node.
*/

export class Node {
    val: number;
    neighbors: Node[];

    constructor(val?: number, neighbors?: Node[]) {
        this.val = val ?? 0;
        this.neighbors = neighbors ?? [];
    }
}

function cloneGraph(node: Node | null): Node | null {
    if (!node) return null;

    const visited = new Map<Node, Node>();

    const dfs = (curr: Node): Node => {
        if (visited.has(curr)) return visited.get(curr)!;

        const copy = new Node(curr.val);
        visited.set(curr, copy);

        for (const neighbor of curr.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }

        return copy;
    };

    return dfs(node);
}
