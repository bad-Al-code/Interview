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

    /**
     * @param {T} value - value to be insertd
     * @returns  {TreeNode<T>|null}
     */
    insert(value: T): TreeNode<T> | null {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this.root;
        }

        let current = this.root;
        while (current) {
            if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this.root;
                }
                current = current.right;
            } else if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;

                    return this.root;
                }
                current = current.left;
            }
        }

        return this.root;
    }

    /**
     * Minimum value on the BST.
     * @param {TreeNode<T>|null} node - root nide
     * @returns {TreeNode<T>|null} Returns node with minimum value
     */
    minimumValueNode(node: TreeNode<T> | null): TreeNode<T> | null {
        let current = node;
        while (current && current.left) {
            current = current.left;
        }
        return current;
    }

    /**
     * Remove a node with given value
     * @param {T} value
     * @returns {TreeNode<T> | null} Root of the tree after removal
     */
    remove(root: TreeNode<T> | null, value: T): TreeNode<T> | null {
        if (root === null) {
            return null;
        }

        if (value > root.value) {
            root.right = this.remove(root.right, value);
        } else if (value < root.value) {
            root.left = this.remove(root.left, value);
        } else {
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            } else {
                let minNode = this.minimumValueNode(root.right)!;
                root.value = minNode.value;
                root.right = this.remove(root.right, minNode.value);
            }
        }

        return root;
    }
}

const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log('Before deletion:');
console.log(bst.root);
