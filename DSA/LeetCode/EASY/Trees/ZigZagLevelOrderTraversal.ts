import { TreeNode } from './BinaryTree';
function zigzagLevelOrder(root: TreeNode<number> | null): number[][] {
    if (!root) return [];

    const result: number[][] = [];
    const queue: TreeNode<number>[] = [root];
    let index = 0;
    let level = 0;

    while (index < queue.length) {
        const output: number[] = [];
        const queueLength = queue.length - index;

        for (let i = 0; i < queueLength; i++) {
            const node = queue[index++];

            if (node) {
                output.push(node.value);

                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
        }

        if (level % 2 === 1) {
            output.reverse();
        }

        result.push(output);
        level++;
    }

    return result;
}
