### Doubly Linked List

A **doubly linked list** is a type of linked list in which each node contains three components:

1. **Value**: The actual data stored in the node.
2. **Next Pointer**: A reference to the next node in the list.
3. **Previous Pointer**: A reference to the previous node in the list.

This structure allows traversal in both forward and backward directions, unlike a singly linked list where traversal is unidirectional.

#### Key Operations in Doubly Linked List:

1. **Insert at Front**: Adds a node at the beginning of the list.
2. **Insert at End**: Adds a node at the end of the list.
3. **Remove from Front**: Deletes the node at the beginning of the list.
4. **Remove from End**: Deletes the node at the end of the list.
5. **Traversal**: Navigate through the list and display its content.

#### Advantages of Doubly Linked List:

- Supports two-way traversal.
- Allows easier insertion and deletion operations compared to arrays.

#### Disadvantages:

- Requires extra memory for the additional pointer in each node.

```typescript
class DoublyListNode {
    val: number;
    next: DoublyListNode | null;
    prev: DoublyListNode | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    private head: DoublyListNode;
    private tail: DoublyListNode;

    constructor() {
        this.head = new DoublyListNode(-1);
        this.tail = new DoublyListNode(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * Inserts a value at the front of the linked list.
     * @param {number} val - The value to insert.
     */
    insertFront(val: number): void {
        const newNode = new DoublyListNode(val);
        newNode.prev = this.head;
        newNode.next = this.head.next;

        this.head.next!.prev = newNode;
        this.head.next = newNode;
    }

    /**
     * Inserts a value at the end of the linked list.
     * @param {number} val - The value to insert.
     */
    insertEnd(val: number): void {
        const newNode = new DoublyListNode(val);
        newNode.next = this.tail;
        newNode.prev = this.tail.prev;

        this.tail.prev!.next = newNode;
        this.tail.prev = newNode;
    }

    /**
     * Removes the first node after the dummy head (assumes it exists).
     */
    removeFront(): void {
        if (this.head.next === this.tail) return; // List is empty
        this.head.next = this.head.next!.next;
        this.head.next!.prev = this.head;
    }

    /**
     * Removes the last node before the dummy tail (assumes it exists).
     */
    removeEnd(): void {
        if (this.tail.prev === this.head) return; // List is empty
        this.tail.prev = this.tail.prev!.prev;
        this.tail.prev!.next = this.tail;
    }

    /**
     * Prints the elements of the linked list.
     */
    print(): void {
        let curr = this.head.next;
        const result: number[] = [];
        while (curr !== this.tail) {
            result.push(curr!.val);
            curr = curr!.next;
        }
        console.log(result.join(' -> '));
    }
}
```
