class TrieNode {
    word: boolean;
    children: Map<string, TrieNode>;

    constructor() {
        this.word = false;
        this.children = new Map<string, TrieNode>();
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * Inserts a word into the Trie.
     * @param {string} word - The word to be inserted.
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
}

/**
 * @param {TrieNode} root
 * @param {string[]} result
 * @param {number} level
 * @param {string[]} word
 */
function getWords(
    root: TrieNode,
    result: string[],
    level: number,
    word: string[],
): void {
    if (root.word) {
        const temp: string = word.slice(0, level).join('');
        result.push(temp);
    }

    for (const [char, child] of Array.from(root.children.entries()).sort()) {
        word[level] = char;
        getWords(child, result, level + 1, word);
    }
}

/**
 * @param {string[]} arr
 * @returns {string[]}
 */
function sortArray(arr: string[]): string[] {
    const result: string[] = [];
    const trie: Trie = new Trie();

    for (const word of arr) {
        trie.insert(word);
    }

    const word: string[] = [];
    getWords(trie.root, result, 0, word);

    return result;
}

const arr8: string[] = ['abc', 'aba', 'ceed', 'cde'];
console.log('Original Array:', arr8);
console.log('Sorted Array:', sortArray(arr8));
