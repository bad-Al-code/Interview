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

    insert(root: TreeNode<T> | null, value: T): TreeNode<T> | null {
        const newNode = new TreeNode(value);

        if (!root) {
            return newNode;
        }

        if (value > root.value) {
            root.right = this.insert(root.right, value);
        } else if (value < root.value) {
            root.left = this.insert(root.left, value);
        }

        return root;
    }

    minimumValueNode(root: TreeNode<T> | null): TreeNode<T> | null {
        let curr = root;
        while (curr && curr.left) {
            curr = curr.left;
        }

        return curr;
    }

    remove(root: TreeNode<T> | null, value: T): TreeNode<T> | null {
        if (!root) {
            return null;
        }

        if (value > root.value) {
            root.right = this.remove(root.right, value);
        } else if (value < root.value) {
            root.left = this.remove(root.left, value);
        } else {
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            } else {
                let minNode = this.minimumValueNode(root.right)!;
                root.value = minNode?.value;
                root.right = this.remove(root.right, minNode?.value);
            }
        }

        return root;
    }
}

// const bst = new BinarySearchTree<number>();
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
//
// console.log('Before deletion:');
// console.log(bst.root);
