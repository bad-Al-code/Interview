class TrieNode {
    word: boolean;
    children: Map<string, TrieNode>;

    constructor() {
        this.word = false;
        this.children = new Map<string, TrieNode>();
    }
}

class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * Insert a word into the trie
     * @param {string} word
     */
    insert(word: string): void {
        let curr: TrieNode = this.root;

        for (const c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode());
            }

            curr = curr.children.get(c)!;
        }

        curr.word = true;
    }

    /**
     * Search for a word
     * @param {string} word
     * @returns {boolean} True, if words exists, otherwise false.
     */
    search(word: string): boolean {
        let curr: TrieNode = this.root;

        for (const c of word) {
            if (!curr.children.has(c)) {
                return false;
            }

            curr = curr.children.get(c)!;
        }

        return curr.word;
    }

    /**
     * Check if there is any word in the Trie that start with the iven prefix
     * @param {string} prefix
     * @returns {bolean}
     */
    startsWith(prefix: string): boolean {
        let curr: TrieNode = this.root;

        for (const c of prefix) {
            if (!curr.children.has(c)) {
                return false;
            }

            curr = curr.children.get(c)!;
        }

        return true;
    }
}

export { Trie, TrieNode };
