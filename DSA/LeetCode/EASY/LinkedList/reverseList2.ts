export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}
function reverseList(
    head: ListNode | null,
    left: number,
    right: number,
): ListNode | null {
    let next: ListNode | null = null;
    let prev: ListNode | null = null;
    let curr: ListNode | null = null;

    while (right >= left) {
        next = curr!.next;
        curr!.next = prev;
        prev = curr;
        curr = next;

        right--;
    }

    return prev;
}

function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number,
): ListNode | null {
    let curr = head;
    let lpn: ListNode | null = null;
    let right_n: ListNode | null = null;
    let reverse_head: ListNode | null = null;

    let count = 1;
    while (count < left && curr) {
        lpn = curr;
        curr = curr.next;
        count++;
    }
    if (curr) {
        let rpn: ListNode | null = curr;
        while (count <= right && rpn) {
            right_n = rpn;
            rpn = right_n.next;
            count++;
        }
        if (right_n) {
            reverse_head = reverseList(curr, left, right);
        }
        if (lpn) {
            lpn.next = reverse_head;
        }
        if (rpn) {
            let tmp: ListNode | null = reverse_head;

            while (tmp!.next) {
                tmp = tmp!.next;
            }
            tmp!.next = rpn;
        }
    }

    if (lpn) {
        return head;
    } else {
        return reverse_head;
    }
}
