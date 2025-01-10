/**
 * Represends a node in Binary Tree.
 * @template T - Type os the values stored in the node.
 */
export class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    /**
     * Create a TreeNode.
     * @param {T} value - Tha value to store in the node.
     * @param left  - Left chld of the nide (default is null).
     * @param right - Right child of the node (default is null).
     */
    constructor(
        value: T,
        left: TreeNode<T> | null = null,
        right: TreeNode<T> | null = null,
    ) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const root = new TreeNode(10);
const leftChild = new TreeNode(5);
const rightChild = new TreeNode(5);

root.left = leftChild;
root.right = rightChild;

console.log('Binary Tree Root: ', root);
