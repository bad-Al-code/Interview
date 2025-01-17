class Pair<K, V> {
    key: K;
    val: V;

    constructor(key: K, val: V) {
        this.key = key;
        this.val = val;
    }
}

class HashMap<K, V> {
    private size: number;
    private capacity: number;
    private map: (Pair<K, V> | null)[];

    constructor() {
        this.size = 0;
        this.capacity = 2;
        this.map = new Array<Pair<K, V> | null>(this.capacity).fill(null);
    }

    /**
     * @param key - The key to hash.
     * @returns The index in the map array.
     */
    private hash(key: K): number {
        const keyStr = String(key);
        let index = 0;
        for (let i = 0; i < keyStr.length; i++) {
            index += keyStr.charCodeAt(i);
        }
        return index % this.capacity;
    }

    /**
     * @param key - The key to search for.
     * @returns The value associated with the key, or null if the key is not found.
     */
    get(key: K): V | null {
        let index = this.hash(key);
        while (this.map[index] !== null) {
            if (this.map[index]!.key === key) {
                return this.map[index]!.val;
            }
            index = (index + 1) % this.capacity;
        }
        return null;
    }

    /**
     * @param key - The key to add or update.
     * @param val - The value to associate with the key.
     */
    put(key: K, val: V): void {
        let index = this.hash(key);

        while (true) {
            if (this.map[index] === null) {
                this.map[index] = new Pair(key, val);
                this.size++;
                if (this.size >= this.capacity / 2) {
                    this.rehash();
                }
                return;
            } else if (this.map[index]!.key === key) {
                this.map[index]!.val = val;
                return;
            }
            index = (index + 1) % this.capacity;
        }
    }

    /**
     * @param key - The key to remove.
     */
    remove(key: K): void {
        if (this.get(key) === null) {
            return;
        }

        let index = this.hash(key);
        while (true) {
            if (this.map[index] !== null && this.map[index]!.key === key) {
                this.map[index] = null;
                this.size--;
                return;
            }
            index = (index + 1) % this.capacity;
        }
    }

    /**
     * Rehashes the map to expand its capacity and redistribute key-value pairs.
     */
    private rehash(): void {
        this.capacity *= 2;
        const newMap = new Array<Pair<K, V> | null>(this.capacity).fill(null);
        const oldMap = this.map;
        this.map = newMap;
        this.size = 0;
        for (const pair of oldMap) {
            if (pair !== null) {
                this.put(pair.key, pair.val);
            }
        }
    }

    /**
     * Prints all key-value pairs in the map.
     */
    print(): void {
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i] !== null) {
                console.log(`${this.map[i]!.key} ${this.map[i]!.val}`);
            }
        }
    }
}
