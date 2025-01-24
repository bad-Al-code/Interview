class GraphNode {
    val: number;
    neighbors: Map<number, number>;

    constructor(val: number) {
        this.val = val;
        this.neighbors = new Map();
    }
}
