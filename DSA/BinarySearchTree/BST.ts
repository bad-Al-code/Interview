class TreeNode<T> {
    val: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(
        value: T,
        left: TreeNode<T> | null = null,
        right: TreeNode<T> | null = null,
    ) {
        this.val = value;
        this.left = left;
        this.right = right;
    }
}

function search<T>(root: TreeNode<T> | null, target: T): boolean {
    if (root === null) return false;

    if (target > root.val) {
        return search(root.right, target);
    } else if (target < root.val) {
        return search(root.left, target);
    } else {
        return true;
    }
}

function insert<T>(root: TreeNode<T> | null, val: T): TreeNode<T> {
    if (root === null) {
        return new TreeNode(val);
    }

    if (val > root.val) {
        root.right = insert(root.right, val);
    } else if (val < root.val) {
        root.left = insert(root.left, val);
    }

    return root;
}

function minValueNode<T>(root: TreeNode<T> | null): TreeNode<T> | null {
    let curr = root;
    while (curr && curr.left) {
        curr = curr.left;
    }

    return curr;
}

function remove<T>(root: TreeNode<T> | null, val: T): TreeNode<T> | null {
    if (root === null) {
        return null;
    }

    if (val > root.val) {
        root.right = remove(root.right, val);
    } else if (val < root.val) {
        root.left = remove(root.left, val);
    } else {
        if (!root.left) return root.right;
        else if (!root.right) return root.left;
        else {
            let minNode = minValueNode(root.right)!;
            root.val = minNode.val;
            root.right = remove(root.right, minNode.val);
        }
    }

    return root;
}
