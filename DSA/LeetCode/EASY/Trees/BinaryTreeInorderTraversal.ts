export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(
        val: number,
        left: TreeNode | null = null,
        right: TreeNode | null = null,
    ) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let current = root;

    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop()!;
        result.push(current.val);

        current = current.right;
    }

    return result;
}
