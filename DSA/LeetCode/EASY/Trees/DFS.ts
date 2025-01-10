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

class DFS<T> {
    private result: T[] = [];
    private stack: TreeNode<T>[] = [];
    private current: TreeNode<T> | null = null;

    private root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    setRoot(root: TreeNode<T> | null): void {
        this.root = root;
    }

    inorder(): T[] {
        this.result = [];
        this.stack = [];
        this.current = this.root;

        while (this.current || this.stack.length > 0) {
            while (this.current) {
                this.stack.push(this.current);
                this.current = this.current.left;
            }

            this.current = this.stack.pop()!;
            this.result.push(this.current.value);

            this.current = this.current.right;
        }

        return this.result;
    }

    postOrder(): T[] {
        this.result = [];
        if (!this.root) return this.result;

        const stack1: TreeNode<T>[] = [this.root];
        const stack2: TreeNode<T>[] = [];

        while (stack1.length > 0) {
            const node = stack1.pop()!;
            stack2.push(node);

            if (node.left) stack1.push(node.left);
            if (node.right) stack1.push(node.right);
        }

        while (stack2.length > 0) {
            this.result.push(stack2.pop()!.value);
        }

        return this.result;
    }

    preOrder(): T[] {
        this.result = [];
        if (!this.root) return this.result;

        this.stack = [this.root];

        while (this.stack.length > 0) {
            const node = this.stack.pop()!;
            this.result.push(node.value);

            if (node.right) this.stack.push(node.right);
            if (node.left) this.stack.push(node.left);
        }

        return this.result;
    }
}

const root = new TreeNode<number>(
    10,
    new TreeNode(5, new TreeNode(2), new TreeNode(6)),
    new TreeNode(15, null, new TreeNode(20)),
);

const dfs = new DFS<number>();
dfs.setRoot(root);

console.log('Inorder:', dfs.inorder());
console.log('Postorder:', dfs.postOrder());
console.log('Preorder:', dfs.preOrder());
