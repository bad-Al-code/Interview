export class TrieNode {
    children = new Map<string, TrieNode>();
    isDeleted = false;
}

class DuplicateFolderDeleter {
    private readonly root = new TrieNode();
    private readonly signaturecounts = new Map<string, number>();
    private readonly signatureToNodes = new Map<string, TrieNode[]>();

    constructor(paths: string[][]) {
        this.buildTrie(paths);
    }

    public getPrunedPaths(): string[][] {
        this.analyzeSubtrees(this.root);

        this.markForDeletion();

        const resultPaths: string[][] = [];
        this.collectPaths(this.root, [], resultPaths);

        return resultPaths;
    }

    private collectPaths(
        node: TrieNode,
        currentPath: string[],
        resultPaths: string[][],
    ): void {
        const sortedChildrenKeys = Array.from(node.children.keys()).sort();

        for (const key of sortedChildrenKeys) {
            const childNode = node.children.get(key)!;

            if (!childNode.isDeleted) {
                currentPath.push(key);
                resultPaths.push([...currentPath]);
                this.collectPaths(childNode, currentPath, resultPaths);
                currentPath.pop();
            }
        }
    }

    private markForDeletion(): void {
        for (const [signature, count] of this.signaturecounts.entries()) {
            if (count > 1) {
                const nodeToMark = this.signatureToNodes.get(signature)!;

                for (const node of nodeToMark) {
                    node.isDeleted = true;
                }
            }
        }
    }

    private analyzeSubtrees(node: TrieNode): string {
        const sortedChildrenKeys = Array.from(node.children.keys()).sort();

        let signature = '(';
        for (const key of sortedChildrenKeys) {
            const childNode = node.children.get(key)!;
            const childSignature = this.analyzeSubtrees(childNode);

            signature += key + childSignature;
        }
        signature += ')';

        if (signature != '()') {
            this.signaturecounts.set(
                signature,
                (this.signaturecounts.get(signature) || 0) + 1,
            );

            if (!this.signatureToNodes.has(signature)) {
                this.signatureToNodes.set(signature, []);
            }

            this.signatureToNodes.get(signature)!.push(node);
        }

        return signature;
    }

    private buildTrie(paths: string[][]): void {
        for (const path of paths) {
            let currentNode = this.root;
            for (const folderName of path) {
                if (!currentNode.children.has(folderName)) {
                    currentNode.children.set(folderName, new TrieNode());
                }
                currentNode = currentNode.children.get(folderName)!;
            }
        }
    }
}

function deleteDuplicateFolder(paths: string[][]): string[][] {
    const deleter = new DuplicateFolderDeleter(paths);

    return deleter.getPrunedPaths();
}

const paths = [['a'], ['c'], ['d'], ['a', 'b'], ['c', 'b'], ['d', 'a']];
console.log(deleteDuplicateFolder(paths));
const paths1 = [
    ['a'],
    ['c'],
    ['a', 'b'],
    ['c', 'b'],
    ['a', 'b', 'x'],
    ['a', 'b', 'x', 'y'],
    ['w'],
    ['w', 'y'],
];
console.log(deleteDuplicateFolder(paths1));
const paths2 = [['a', 'b'], ['c', 'd'], ['c'], ['a']];
console.log(deleteDuplicateFolder(paths2));
