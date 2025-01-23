export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

class Graph {
    vertices: number;
    list: number[];

    constructor(vertices: number) {
        this.vertices = vertices;
        this.list = new Array();

        for (let i = 0; i < vertices; i++) {
            let temp = new ListNode();
            this.list.push();
        }
    }
}
