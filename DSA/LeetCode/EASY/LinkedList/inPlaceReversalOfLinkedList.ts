export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function inplace(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return null;
    }

    let curr: ListNode | null = head;
    let prev: ListNode | null = null;
    let temp: ListNode | null = curr.next;

    while (curr && curr.next) {
        curr.next = prev;
        prev = curr;
        curr = temp;
        temp = curr!.next;
    }

    return head;
}
