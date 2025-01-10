export class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(
        value: T,
        left: TreeNode<T> | null = null,
        right: TreeNode<T> | null = null,
    ) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

export class BinarySearchTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    search(target: T): boolean {
        let current = this.root;
        if (!current) {
            return false;
        }

        while (current !== null) {
            if (target === current.value) {
                return true;
            } else if (target > current.value) {
                current = current.right;
            } else {
                current = current.left;
            }
        }

        return false;
    }
}
