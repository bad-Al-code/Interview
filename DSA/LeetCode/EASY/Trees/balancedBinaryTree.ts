class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * @param {TreeNode | null} root
 * @returns {boolean}
 */
function isBalanced(root: TreeNode | null): boolean {
    /**
     * @param {TreeNode | null} node
     * @returns {number}
     */
    function getHeight(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }

        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);

        if (
            leftHeight === -1 ||
            rightHeight === -1 ||
            Math.abs(leftHeight - rightHeight) > 1
        ) {
            return -1;
        }

        return Math.max(leftHeight, rightHeight) + 1;
    }

    return getHeight(root) !== -1;
}

const root1 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
const root2 = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(3, new TreeNode(4), new TreeNode(4)),
        new TreeNode(3),
    ),
    new TreeNode(2),
);
const root3 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), null),
    new TreeNode(2),
);
const root4 = null;

console.log(`Is root1 balanced? ${isBalanced(root1)}`);
console.log(`Is root2 balanced? ${isBalanced(root2)}`);
console.log(`Is root3 balanced? ${isBalanced(root3)}`);
console.log(`Is root4 balanced? ${isBalanced(root4)}`);
