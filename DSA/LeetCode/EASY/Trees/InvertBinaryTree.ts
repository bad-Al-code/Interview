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

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const queue: TreeNode[] = [root];
    let index = 0;

    while (index < queue.length) {
        const node = queue[index++];

        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return root;
}
