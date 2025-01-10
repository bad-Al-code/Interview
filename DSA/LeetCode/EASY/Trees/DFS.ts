import { TreeNode } from './BinaryTree';

class DFS<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    inorder(root: TreeNode<T> | null): void {
        if (!root) {
            return;
        }

        this.inorder(root.left);
        console.log(this.root);
        this.inorder(root.right);
    }

    preOrder(root: TreeNode<T> | null) {
        if (!root) {
            return;
        }

        console.log(this.root);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    postOrder(root: TreeNode<T> | null) {
        if (!root) {
            return;
        }

        this.preOrder(root.left);
        this.preOrder(root.right);
        console.log(this.root);
    }
}
