# Trie

- aka **Prefix Tree**
- main purpose of this data structure is, _provide fast retrieval_
- mostly used for word searches, search engines, auto-suggestions, spell checking, and IP routing.

### Properties

- similar to graph as they are combinaion of nodes where _each node represents a unique alphabhet_
- each node can point to `null` or `other children node`
- size is depends upon the number of alphabets.
- depth of a trie depends on longest word that it stores.
- trie provides the same path for words that sahre a common prefix.

#### Trie Node Class

```typescript
class TrieNode {
    /** Indicates whether this node marks the end of a valid word. */
    word: boolean;
    /** Map of child nodes, where keys are characters and values are TrieNode objects. */
    children: Map<string, TrieNode>;

    constructor() {
        this.word = false;
        this.children = new Map<string, TrieNode>();
    }
}
```

#### Trie Class

````typescript
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

```
````
