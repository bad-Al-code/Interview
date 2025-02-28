class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
): TreeNode | null {
    let lca: TreeNode | null = null;

    function lowestCommonAncestorRec(
        currentNode: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ): boolean {
        if (!currentNode) return false;

        let left = false;
        let right = false;
        let mid = false;

        if (currentNode === p || currentNode === q) {
            mid = true;
        }

        left = lowestCommonAncestorRec(currentNode.left, p, q);

        if (!lca) {
            right = lowestCommonAncestorRec(currentNode.right, p, q);
        }

        if ((mid ? 1 : 0) + (left ? 1 : 0) + (right ? 1 : 0) >= 2) {
            lca = currentNode;
        }

        return mid || left || right;
    }

    lowestCommonAncestorRec(root, p, q);
    return lca;
}
