export class TreeNode {
    value: number | null;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(
        value: number | null,
        left: TreeNode | null = null,
        right: TreeNode | null = null,
    ) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Codec {
    serialize(root: TreeNode | null): string {
        if (!root) return 'null';

        const result: string[] = [];
        const queue: (TreeNode | null)[] = [root];
        let index = 0;

        while (index < queue.length) {
            const node = queue[index++];
            if (node === null) {
                result.push('null');
            } else {
                result.push(node.value!.toString());
                queue.push(node.left);
                queue.push(node.right);
            }
        }

        return result.join(',');
    }

    deserialize(data: string): TreeNode | null {
        if (data === 'null') return null;

        const values = data.split(',');
        const root = new TreeNode(parseInt(values[0]));
        const queue: TreeNode[] = [root];
        let index = 0;
        let i = 1;

        while (index < queue.length && i < values.length) {
            const node = queue[index++];
            if (values[i] !== 'null') {
                node.left = new TreeNode(parseInt(values[i]));
                queue.push(node.left);
            }
            i++;

            if (i < values.length && values[i] !== 'null') {
                node.right = new TreeNode(parseInt(values[i]));
                queue.push(node.right);
            }
            i++;
        }

        return root;
    }
}

const codec = new Codec();
const root = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(3, new TreeNode(4), new TreeNode(5)),
);
const serialized = codec.serialize(root);
console.log(serialized);

const deserialized = codec.deserialize(serialized);
console.log(codec.serialize(deserialized));
