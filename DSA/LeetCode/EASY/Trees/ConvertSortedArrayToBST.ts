export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (!nums.length) return null;

    const getNode = (l: number, r: number): TreeNode | null => {
        if (l > r) return null;

        const middleIdx = Math.floor((r + l) / 2);
        return new TreeNode(
            nums[middleIdx],
            getNode(l, middleIdx - 1),
            getNode(middleIdx + 1, r),
        );
    };

    return getNode(0, nums.length - 1);
}
