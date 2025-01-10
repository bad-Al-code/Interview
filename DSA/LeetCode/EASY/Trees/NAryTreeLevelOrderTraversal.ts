class _Node {
    val: number;
    children: _Node[];

    constructor(v: number) {
        this.val = v;
        this.children = [];
    }
}

function levelOrder(root: _Node | null): number[][] {
    if (!root) return [];

    const result: number[][] = [];
    const queue: _Node[] = [root];
    let index = 0;

    while (index < queue.length) {
        let queueLength = queue.length - index;
        const output: number[] = [];

        for (let i = 0; i < queueLength; i++) {
            const node = queue[index++];
            if (node) {
                output.push(node.val);

                for (const child of node.children) {
                    queue.push(child);
                }
            }
        }

        result.push(output);
    }

    return result;
}
