export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteMiddle(head: ListNode | null) {
    if (!head || !head.next) return null;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head.next.next;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    slow!.next = slow!.next!.next;

    return head;
}

function deleteMiddle1(head: ListNode | null) {
    if (!head || !head.next) return null;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let prev: ListNode | null = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow!.next;
        fast = fast.next.next;
    }

    if (prev) prev.next = slow!.next;

    return head;
}

function deleteMiddle2(head: ListNode | null) {
    if (!head || !head.next) return null;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    fast = head;
    while (fast && fast.next !== slow) fast = fast.next;

    fast!.next = slow!.next!.next;

    return head;
}
