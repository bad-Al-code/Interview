export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function getMiddleNode(head: ListNode | null): ListNode | null {
    if (!head) {
        throw new Error(
            'As we have been told, head is never going to be null, GTFO',
        );
    }

    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    return slow;
}
