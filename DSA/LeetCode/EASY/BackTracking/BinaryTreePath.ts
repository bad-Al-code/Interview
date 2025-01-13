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

function binaryTreePaths(root: TreeNode | null): string[] {
    const output: string[] = [];

    const dfs = (node: TreeNode | null, path: string): void => {
        if (!node) return;

        const newPath = path ? `${path}->${node.val}` : `${node.val}`;
        while (!node.left && !node.right) {
            output.push(newPath);
            return;
        }

        dfs(node.left, newPath);
        dfs(node.right, newPath);
    };

    dfs(root, '');
    return output;
}

const root = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(5)),
    new TreeNode(3),
);

console.log(binaryTreePaths(root));
