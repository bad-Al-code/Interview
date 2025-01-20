export class TrieNode {
    word: boolean;
    children: Map<string, TrieNode>;
    wordStr: string | null;

    constructor() {
        this.word = false;
        this.children = new Map();
        this.wordStr = null;
    }
}

class Trie {
    private root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    getRoot(): TrieNode {
        return this.root;
    }

    insert(word: string): void {
        let curr: TrieNode = this.root;

        for (const c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode());
            }

            curr = curr.children.get(c)!;
        }

        curr.word = true;
        curr.wordStr = word;
    }
}

function findWords(board: string[][], words: string[]): string[] {
    if (!board.length || !board[0].length || !words.length) return [];

    const trie = new Trie();
    for (const word of words) {
        trie.insert(word);
    }
    const result: Set<string> = new Set();
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row: number, col: number, node: TrieNode) {
        if (
            row < 0 ||
            col < 0 ||
            row >= rows ||
            col >= cols ||
            board[row][col] === '#'
        ) {
            return;
        }

        const c = board[row][col];
        const nextNode = node.children.get(c);
        if (!nextNode) {
            return;
        }

        if (nextNode.word) {
            result.add(nextNode.wordStr!);
        }

        const temp = board[row][col];
        board[row][col] = '#';

        dfs(row + 1, col, nextNode);
        dfs(row - 1, col, nextNode);
        dfs(row, col + 1, nextNode);
        dfs(row, col - 1, nextNode);

        board[row][col] = temp;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            dfs(i, j, trie.getRoot());
        }
    }

    return Array.from(result);
}
const board = [
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v'],
];
const words = ['oath', 'pea', 'eat', 'rain'];

console.log(findWords(board, words));
