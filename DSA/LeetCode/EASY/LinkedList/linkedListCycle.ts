export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }
    /**
     * Insert node at head of linked list
     */
    insertAtHead(node: ListNode): void {
        if (this.head) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
        }
    }

    /**
     * Create Linked List
     */
    createLinkedList(list: number[]): void {
        list.reverse().forEach((element) => {
            let newNode = new ListNode(element);
            this.insertAtHead(newNode);
        });
    }

    /**
     * Print the linked list with forward arrow
     */
    printList(head: ListNode | null): void {
        const result: number[] = [];
        let curr = head;

        while (curr) {
            result.push(curr.val);
            curr = curr.next;
        }

        console.log(result.join(' -> '));
    }
}

function detectCycle(head: ListNode): boolean {
    if (!head) return false;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}
