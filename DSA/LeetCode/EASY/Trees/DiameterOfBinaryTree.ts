import { TreeNode } from './BinaryTree';

function diameterOfBinaryTree(root: TreeNode<number> | null): number {
    let diameter = 0;

    function height(node: TreeNode<number> | null): number {
        if (!node) return 0;

        const leftHeight = height(node.left);
        const rightHeight = height(node.right);

        diameter = Math.max(diameter, leftHeight + rightHeight);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    height(root);
    return diameter;
}

const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3),
);

console.log(diameterOfBinaryTree(root));
