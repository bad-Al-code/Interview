export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Swaps values between two nodes in the linked list.
 *
 * @param node1
 * @param node2
 */
function swap(node1: ListNode | null, node2: ListNode | null): void {
    if (!node1 || !node2) return;

    const temp: number = node1.val;
    node1.val = node2.val;
    node2.val = temp;
}

/**
 * Swaps the k-th node from the beginning with the k-th node from the end.
 *
 * @param head
 * @param k
 * @returns
 */
function swapNodes(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null;

    let curr: ListNode | null = head;
    let front: ListNode | null = null;
    let end: ListNode | null = head;
    let count: number = 0;

    while (curr) {
        count++;
        if (count === k) {
            front = curr;
            end = head;
        }

        if (count > k) {
            end = end!.next;
        }

        curr = curr.next;
    }

    swap(front, end);

    return head;
}

/**
 * Helper function to create a linked list from an array.
 * @param values
 * @returns
 */
function createLinkedList(values: number[]): ListNode | null {
    if (values.length === 0) return null;
    let head: ListNode = new ListNode(values[0]);
    let current: ListNode = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    return head;
}

/**
 * Helper function to print a linked list.
 *
 * @param head
 * @returns
 */
function printList(head: ListNode | null): string {
    const result: string[] = [];
    let current: ListNode | null = head;
    while (current) {
        result.push(current.val.toString());
        current = current.next;
    }
    return result.join(' -> ') + ' -> null';
}

const testCases = [
    { list: [1, 2, 3, 4, 5], k: 2 },
    { list: [7, 9, 6, 6, 7, 8, 3, 0, 9, 5], k: 5 },
    { list: [1, 2, 3, 4, 5, 6], k: 3 },
    { list: [100, 90], k: 1 },
];

testCases.forEach(({ list, k }, index) => {
    let head = createLinkedList(list);
    console.log(`${index + 1}. Original List: ${printList(head)}`);
    head = swapNodes(head, k);
    console.log(`   Swapped List: ${printList(head)}`);
    console.log('-'.repeat(50));
});
