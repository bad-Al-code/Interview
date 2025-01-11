export class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(
        value: number,
        left: TreeNode | null = null,
        right: TreeNode | null = null,
    ) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0 || inorder.length === 0) return null;

    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);

    const rootIndex = inorder.indexOf(rootVal);

    const inorderLeft = inorder.slice(0, rootIndex);
    const inorderRight = inorder.slice(rootIndex + 1);

    const preorderLeft = preorder.slice(1, 1 + inorderLeft.length);
    const preorderRight = preorder.slice(1 + inorderLeft.length);

    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);

    return root;
}
