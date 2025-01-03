- Javascript does not have in-built linked list data structure.

- linked list formed by **Nodes** that are linked togeher like a chain.
- Eack node have a next pointer, which point to the next listnode.
- next pointer only points forward, there is no backward pointer; that's why we its a singly linked list.

- Node Class

```typescript
class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = next;
    }
}
```

- LinkedList class
- `add(value: T)` - Adds a value to the end of the linked list.
- `remove(value: T)` - Removes the first occurrence of the given value.
- `find(value: T)` - Searches for the first occurrence of the given value.
- `isEmpty()` - Returns `true` if the linked list is empty.
- `size()` - Returns the number of nodes in the linked list.
- `toArray()` - Converts the linked list into an array for visualization.

```typescript
class LinkedList<T> {
    private head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    /**
     * Add a new node with the given value to the end of the linked list.
     * @param {T} value - the value to add
     */
    add(value: T): void {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    /**
     * Remove the first node with given alue
     * @param {T} value - the value to Remove
     * @returns {boolean} - True, if value found and removed, false otherwise
     */
    remove(value: T): boolean {
        if (!this.head) return false;

        if ((this.head.value = value)) {
            this.head = this.head.next;

            return true;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            return true;
        }

        return false;
    }

    /**
     * Finds the first node with the given value.
     * @param value - The value to search for.
     * @returns {Node<T> | null} - The found node, or null if not found.
     */
    find(value: T): Node<T> | null {
        let current = this.head;

        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }

        return null;
    }

    /**
     * Displays the linked list as an array.
     * @returns {T[]} - Array representation of the linked list.
     */
    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;

        while (current) {
            result.push(current.value);
            current = current.next;
        }

        return result;
    }

    /**
     * Checks if the linked list is empty.
     * @returns {boolean} - True if the list is empty, false otherwise.
     */
    isEmpty(): boolean {
        return this.head === null;
    }

    /**
     * Gets the size of the linked list.
     * @returns {number} - Number of nodes in the list.
     */
    size(): number {
        let count = 0;
        let current = this.head;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }
}
```

- In Linked List, deletion and insertion at head happen in a constant amount of time,

```typescript
class DoublyLinkedList<T> {
	value: T;
	next: Node<T> | null;
	prev: Node<T< | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

```

### Which is Better?

- Doubly Linked List can be traversed in both directions.
- Doubly Linked List also require extra memory.

```typescript
let lastNode = this.tail;
this.tail = lastNode.prev;
if (!this.tail) {
    this.head = null;
}

this.tail.next = null;
```
