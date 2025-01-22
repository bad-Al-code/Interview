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

function cloneGraph(node: _Node | null): _Node | null {
    return node;
}
