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

function constructFromPrePost(
    preorder: number[],
    postorder: number[],
): TreeNode | null {
    if (!preorder.length || !postorder.length) return null;

    let preIndex = 0;
    let postIndex = 0;

    function construct(): TreeNode | null {
        if (preIndex >= preorder.length) return null;

        const root = new TreeNode(preorder[preIndex++]);

        if (root.val !== postorder[postIndex]) {
            root.left = construct();
        }
        if (root.val !== postorder[postIndex]) {
            root.right = construct();
        }

        postIndex++;
        return root;
    }

    return construct();
}

const preorder = [1, 2, 4, 5, 3, 6, 7];
const postorder = [4, 5, 2, 6, 7, 3, 1];

console.log(constructFromPrePost(preorder, postorder));
