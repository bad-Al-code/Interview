export class listnode {
    val: number;
    next: listnode | null;
    constructor(val?: number, next?: listnode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function merge2Lists(
    head1: ListNode | null,
    head2: ListNode | null,
): ListNode | null {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (head1 && head2) {
        if (head1.val < head2.val) {
            current.next = head1;
            head1 = head1.next;
        } else {
            current.next = head2;
            head2 = head2.next;
        }

        current = current.next;
    }

    current.next = head1 ? head1 : head2;

    return dummy.next;
}

function splitList(head: ListNode | null, step: number): ListNode | null {
    if (!head) return null;

    for (let i = 1; head.next && i < step; i++) {
        head = head.next;
    }

    let secondHalf = head.next;
    head.next = null;
    return secondHalf;
}

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let length = 0;
    let current: ListNode | null = head;

    while (current) {
        length++;
        current = current.next;
    }

    let dummy = new ListNode(0, head);
    let step = 1;

    while (step < length) {
        let prev = dummy;
        let curr = dummy.next;

        while (curr) {
            let left = curr;
            let right = splitList(left, step);
            curr = splitList(right, step);

            prev.next = merge2Lists(left, right);

            while (prev.next) prev = prev.next;
        }

        step *= 2;
    }

    return dummy.next;
}
