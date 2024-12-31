class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(
        value?: number,
        left?: TreeNode | null,
        right?: TreeNode | null,
    ) {
        this.val = value === undefined ? 0 : value;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function helper(nums: number[], left: number, right: number): TreeNode | null {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = helper(nums, left, mid - 1);
    root.right = helper(nums, mid + 1, right);

    return root;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return helper(nums, 0, nums.length - 1);
}
