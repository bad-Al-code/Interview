export class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(
        value: number,
        left: TreeNode | null = null,
        right: TreeNode | null = null,
    ) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function isValid(root: TreeNode | null): boolean {
    const stack: TreeNode[] = [];
    let prev: number | null = null;
    let node = root;

    while (node || stack.length > 0) {
        while (node) {
            stack.push(node);
            node = node.left;
        }

        node = stack.pop()!;

        if (prev !== null && node.value <= prev) {
            return false;
        }

        prev = node.value;

        node = node.right;
    }

    return true;
}

const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

console.log(isValid(root));
console.log(isValid(null));
