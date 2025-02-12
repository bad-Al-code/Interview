export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

interface ILinkedList {
    insertNodeAtHead(node: ListNode): void;
    createLinkedList(values: number[]): void;
    display(): string;
}

class LinkedList implements ILinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    /**
     * Inserts a node at the head of the linked list.
     * @param node
     */
    insertNodeAtHead(node: ListNode): void {
        node.next = this.head;
        this.head = node;
    }

    /**
     * Creates a linked list from an array of numbers.
     * @param values
     */
    createLinkedList(values: number[]): void {
        for (let i = values.length - 1; i >= 0; i--) {
            this.insertNodeAtHead(new ListNode(values[i]));
        }
    }

    /**
     * Returns a string representation of the linked list.
     * @returns
     */
    display(): string {
        let result: string[] = [];
        let temp = this.head;

        while (temp) {
            result.push(temp.val.toString());
            temp = temp.next;
        }

        return `[${result.join(' -> ')}]`;
    }
}

/**
 * Prints a linked list in a readable format.
 * @param node
 * @returns
 */
function printListWithForwardArrow(node: ListNode | null): string {
    const result: string[] = [];
    let temp: ListNode | null = node;

    while (temp) {
        result.push(temp.val.toString());
        temp = temp.next;
    }

    return result.length ? result.join(' -> ') + ' -> null' : 'null';
}

/**
 * Reverses the first `k` nodes of a linked list.
 * @param head
 * @param k
 * @returns
 */
function reverseLinkedList(
    head: ListNode | null,
    k: number,
): [ListNode | null, ListNode | null] {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;
    let next: ListNode | null = null;

    for (let i = 0; i < k; i++) {
        next = curr!.next;
        curr!.next = prev;
        prev = curr;
        curr = next;
    }

    return [prev, curr];
}

/**
 * Reverses nodes in k-sized groups in a linked list.
 * @param head
 * @param k
 * @returns
 */
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || k <= 1) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let ptr: ListNode | null = dummy;

    while (ptr) {
        let tracker: ListNode | null = ptr;

        for (let i = 0; i < k; i++) {
            if (tracker === null) {
                break;
            }
            tracker = tracker.next;
        }

        if (tracker === null) {
            break;
        }

        const updatedNodes = reverseLinkedList(ptr.next, k);
        const previous = updatedNodes[0];
        const current = updatedNodes[1];

        const lastNodeOfReversedGroup: ListNode | null = ptr.next!;
        lastNodeOfReversedGroup.next = current;
        ptr.next = previous;
        ptr = lastNodeOfReversedGroup;
    }

    return dummy.next;
}

function main(): void {
    const inputLists: number[][] = [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [3, 4, 5, 6, 2, 8, 7, 7],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5, 6, 7],
        [1],
    ];
    const kValues: number[] = [3, 2, 1, 7, 1];

    inputLists.forEach((values, index) => {
        const linkedList = new LinkedList();
        linkedList.createLinkedList(values);

        console.log(
            `${index + 1}. Linked List:`,
            printListWithForwardArrow(linkedList.head!),
        );
        console.log('Reversing in k-groups...');

        const result = reverseKGroup(linkedList.head, kValues[index]);
        console.log(
            'Reversed Linked List:',
            printListWithForwardArrow(result!),
        );
        console.log('-'.repeat(100));
    });
}
main();
