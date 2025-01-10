import { TreeNode } from './BinaryTree';

function levelOrderBottom(root: TreeNode<number> | null): number[][] {
    if (!root) return [];

    const result: number[][] = [];
    const queue: TreeNode<number>[] = [];
    let index = 0;

    queue.push(root);

    while (index < queue.length) {
        let queueLength = queue.length - index;
        const output: number[] = [];

        for (let i = 0; i < queueLength; i++) {
            const node = queue[index++];
            if (node) {
                output.push(node.value);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        result.unshift(output);
    }

    return result;
}
