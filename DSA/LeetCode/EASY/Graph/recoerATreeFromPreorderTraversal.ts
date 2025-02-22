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

/**
 * Input: traversal = "1-2--3--4-5--6--7"
 * Output: [1,2,5,3,4,6,7]
 */

function recoverFromPreorder(traversal: string): TreeNode | null {
    const stack: TreeNode[] = [];
    let i = 0;

    while (i < traversal.length) {
        let depth = 0;

        while (i < traversal.length && traversal[i] === '-') {
            depth++;
            i++;
        }

        let num = 0;
        while (
            i < traversal.length &&
            traversal[i] >= '0' &&
            traversal[i] <= '9'
        ) {
            num = num * 10 + (traversal[i].charCodeAt(0) - '0'.charCodeAt(0));
            i++;
        }

        const node = new TreeNode(num);
        while (stack.length > depth) {
            stack.pop();
        }

        if (stack.length > 0) {
            if (!stack[stack.length - 1].left) {
                stack[stack.length - 1].left = node;
            } else {
                stack[stack.length - 1].right = node;
            }
        }

        stack.push(node);
    }

    return stack[0] || null;
}

const s = '1-2--3--4-5--6--7';
const tree = recoverFromPreorder(s);
console.log(JSON.stringify(tree, null, 2));
