import { TreeNode } from './BinaryTree';

class BFS<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    bfs(root: TreeNode<T> | null): number {
        let queue: TreeNode<T>[] = [];

        if (root) {
            queue.push(root);
        }

        let level = 0;
        while (queue.length > 0) {
            console.log('level ' + level + ': ');

            for (let i = 0; i < queue.length; i++) {
                let curr = queue.shift();
                console.log(curr!.value + ' ');

                if (curr) {
                    if (curr.left) {
                        queue.push(curr.left);
                    }
                    if (curr.right) {
                        queue.push(curr.right);
                    }
                }
            }
            level++;
        }

        return level;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const bfs = new BFS<number>();
bfs.bfs(root);
