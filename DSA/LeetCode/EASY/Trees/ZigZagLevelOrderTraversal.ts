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
                let position = level % 2 === 0 ? i : queueLength - 1 - i;
                output[position] = node.value;

                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
        }

        result.push(output);
        level++;
    }

    return result;
}
