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
}

const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log('Before deletion:');
console.log(bst.root);
