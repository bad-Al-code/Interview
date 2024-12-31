class TreeNode<T> {
    val: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(
        value: T,
        left: TreeNode<T> | null = null,
        right: TreeNode<T> | null,
    ) {
        this.val = value;
        this.left = left;
        this.right = right;
    }
}

function BFS<T>(root: TreeNode<T> | null): number {
    let queue = [];

    if (root === null) {
        queue.push(root)!;
    }

    let level = 0;
    while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            let curr = queue.shift();
            if (curr.left !== null) {
                queue.push(curr.left);
            }
            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }
        level++;
    }
    return level;
}
