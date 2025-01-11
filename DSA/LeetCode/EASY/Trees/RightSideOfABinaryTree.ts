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

function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];

    const result: number[] = [];
    const queue: TreeNode[] = [root];

    let index = 0;
    while (index < queue.length) {
        const queueLength = queue.length - index;

        for (let i = 0; i < queueLength; i++) {
            const node = queue[index++];

            console.log(
                `Level ${result.length + 1}: Processing ${queueLength} nodes.`,
            );

            if (node) {
                if (i === queueLength - 1) {
                    result.push(node.val);
                    console.log(
                        `Adding ${node.val} to the result (rightmost node of level).`,
                    );
                }

                if (node.left) {
                    queue.push(node.left);
                    console.log(
                        `Adding left child with value: ${node.left.val} to the queue.`,
                    );
                }
                if (node.right) {
                    queue.push(node.right);
                    console.log(
                        `Adding right child with value: ${node.right.val} to the queue.`,
                    );
                }
            }
            console.log(
                `Queue after processing level ${result.length}: ${queue.map((node) => (node ? node.val : 'null')).join(', ')}`,
            );
        }
    }

    return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

const rightView = rightSideView(root);
console.log('Right side view of the tree:', rightView);
