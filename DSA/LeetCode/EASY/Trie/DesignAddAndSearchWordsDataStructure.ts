class TrieNode {
    word: boolean;
    children: Map<string, TrieNode>;

    constructor() {
        this.word = false;
        this.children = new Map();
    }
}
class WordDictionary {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let curr: TrieNode = this.root;

        for (const c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode());
            }

            curr = curr.children.get(c)!;
        }

        curr.word = true;
    }

    private dfs(word: string, index: number, node: TrieNode): boolean {
        if (index === word.length) {
            return node.word;
        }

        const c = word[index];

        if (c === '.') {
            for (const [, child] of node.children) {
                if (this.dfs(word, index + 1, child)) {
                    return true;
                }
            }

            return false;
        } else {
            if (!node.children.has(c)) {
                return false;
            }

            return this.dfs(word, index + 1, node.children.get(c)!);
        }
    }

    search(word: string): boolean {
        return this.dfs(word, 0, this.root);
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
