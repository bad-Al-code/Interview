import { TreeNode } from './BinaryTreePath';

function heist(root: TreeNode | null): number[] {
    if (!root) return [0, 0];

    const leftSubtree = heist(root.left);
    const rightSubtree = heist(root.right);

    const includeRoot = root.val + leftSubtree[1] + rightSubtree[1];
    const excludeRoot =
        Math.max(leftSubtree[0], leftSubtree[1]) +
        Math.max(rightSubtree[0], rightSubtree[1]);

    return [includeRoot, excludeRoot];
}

function rob(root: TreeNode | null): number {
    const result = heist(root);

    return Math.max(result[0], result[1]);
}
