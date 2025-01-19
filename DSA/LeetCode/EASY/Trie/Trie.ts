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
     * @param {string} input
     * @returns {boolean} True, if input exists, otherwise false.
     */
    search(input: string): boolean {
        let curr: TrieNode = this.root;

        for (const c of input) {
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

const trie = new Trie();

trie.insert('apple');
trie.insert('app');
trie.insert('application');

console.log(trie.search('app'));
console.log(trie.search('appl'));
console.log(trie.search('apple'));

console.log(trie.startsWith('app'));
console.log(trie.startsWith('ban'));

export { Trie, TrieNode };
