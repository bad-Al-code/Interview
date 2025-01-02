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
