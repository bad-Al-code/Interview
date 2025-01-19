import { Trie, TrieNode } from './Trie';
function totalWords(rootN: TrieNode): number {
    let result = 0;

    if (rootN.word) {
        result++;
    }

    for (const child of rootN.children.values()) {
        result += totalWords(child);
    }

    return result;
}

const trie = new Trie();
const keys = [
    'the',
    'a',
    'there',
    'answer',
    'any',
    'by',
    'bye',
    'their',
    'abc',
];
keys.forEach((word) => trie.insert(word));

console.log(totalWords((trie as any).root));
