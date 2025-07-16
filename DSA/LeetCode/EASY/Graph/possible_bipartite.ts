enum Color {
    UNCOLOURED = 0,
    GROUP_A = 1,
    GROUP_B = -1,
}

class BipartitionChecker {
    private readonly n: number;
    private readonly graph: number[][];
    private readonly colors: Color[];

    constructor(n: number, dislikes: number[][]) {
        this.n = n;
        this.colors = new Array(n + 1).fill(Color.UNCOLOURED);
        this.graph = this.buildGraph(n, dislikes);
    }

    private buildGraph(n: number, dislikes: number[][]): number[][] {
        const adjList: number[][] = Array.from({ length: n + 1 }, () => []);
        for (const [a, b] of dislikes) {
            adjList[a].push(b);
            adjList[b].push(a);
        }

        return adjList;
    }

    public canPartition(): boolean {
        for (let i = 1; i <= this.n; i++) {
            if (this.colors[i] === Color.UNCOLOURED) {
                if (!this.colorComponentWithBFS(i)) {
                    return false;
                }
            }
        }

        return true;
    }

    private colorComponentWithBFS(startNode: number): boolean {
        const queue: number[] = [startNode];
        this.colors[startNode] = Color.GROUP_A;

        while (queue.length > 0) {
            const person = queue.shift()!;

            for (const dislikedPerson of this.graph[person]) {
                if (this.colors[dislikedPerson] === Color.UNCOLOURED) {
                    this.colors[dislikedPerson] = -this.colors[person] as Color;
                    queue.push(dislikedPerson);
                } else if (
                    this.colors[dislikedPerson] === this.colors[person]
                ) {
                    return false;
                }
            }
        }

        return true;
    }
}

function possibleBipartition(n: number, dislikes: number[][]): boolean {
    const checker = new BipartitionChecker(n, dislikes);

    return checker.canPartition();
}

export const n1 = 4;
const dislikes1 = [
    [1, 2],
    [1, 3],
    [2, 4],
];
console.log(possibleBipartition(n1, dislikes1));

export const n2 = 3;
const dislikes2 = [
    [1, 2],
    [1, 3],
    [2, 3],
];
console.log(possibleBipartition(n2, dislikes2));
