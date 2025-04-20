class SimpleQueue<T> {
    private items: T[] = [];
    private head: number = 0;

    enquque(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        const item = this.items[this.head];
        this.head++;

        if (this.head * 2 >= this.items.length && this.head > 100) {
            this.items = this.items.slice(this.head);
            this.head = 0;
        }

        return item;
    }

    isEmpty(): boolean {
        return this.head >= this.items.length;
    }

    size(): number {
        return this.items.length - this.head;
    }

    peek(): T | undefined {
        return this.isEmpty() ? undefined : this.items[this.head];
    }
}

class CourseSchedular {
    private readonly numCourses: number;
    private readonly graph: Map<number, number[]>;
    private readonly inDegree: number[];

    constructor(numCourses: number, prerequisites: number[][]) {
        this.numCourses = numCourses;
        this.graph = new Map<number, number[]>();
        this.inDegree = Array(numCourses).fill(0);
        this._buildGraphAndInDegrees(prerequisites);
    }

    private _buildGraphAndInDegrees(prerequisites: number[][]): void {
        for (let i = 0; i < this.numCourses; i++) {
            this.graph.set(i, []);
        }

        for (const [course, prereq] of prerequisites) {
            if (
                course < 0 ||
                course >= this.numCourses ||
                prereq < 0 ||
                prereq >= this.numCourses
            ) {
                console.warn(
                    `Invalid prerequisite pair found: [${course}, ${prereq}]. Skipping.`,
                );
                continue;
            }

            (this.graph.get(prereq) as number[]).push(course);
            this.inDegree[course]++;
        }
    }

    public findOrder(): number[] {
        const sortedOrder: number[] = [];

        const queue = new SimpleQueue<number>();

        for (let i = 0; i < this.numCourses; i++) {
            if (this.inDegree[i] === 0) {
                queue.enquque(i);
            }
        }

        while (!queue.isEmpty()) {
            const currentCourse = queue.dequeue()!;

            sortedOrder.push(currentCourse);

            const neighbors = this.graph.get(currentCourse) || [];
            for (const neighbor of neighbors) {
                this.inDegree[neighbor]--;
                if (this.inDegree[neighbor] === 0) {
                    queue.enquque(neighbor);
                }
            }
        }

        if (sortedOrder.length === this.numCourses) {
            return sortedOrder;
        } else {
            return [];
        }
    }
}

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    if (numCourses < 0) {
        console.log('Numbers of courses cannot be negative.');
        return [];
    }

    if (numCourses === 0) return [];

    if (!prerequisites || !Array.from(prerequisites)) {
        console.log('prerequisites must be an Array');
        return [];
    }

    if (prerequisites.length === 0 && numCourses > 0) {
        return Array.from({ length: numCourses }, (_, i) => i);
    }

    try {
        const scheduler = new CourseSchedular(numCourses, prerequisites);
        return scheduler.findOrder();
    } catch (error) {
        console.error('Error durng course scheduling: ', error);
        return [];
    }
}

const numCourses1 = 2;
const prerequisites1 = [[1, 0]];
console.log(`Example 1 Order: ${findOrder(numCourses1, prerequisites1)}`);

const numCourses2 = 4;
const prerequisites2 = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
];
console.log(`Example 2 Order: ${findOrder(numCourses2, prerequisites2)}`);

const numCourses3 = 1;
const prerequisites3: number[][] = [];
console.log(`Example 3 Order: ${findOrder(numCourses3, prerequisites3)}`);

const numCourses4 = 2;
const prerequisites4 = [
    [1, 0],
    [0, 1],
];
console.log(`Example 4 Order: ${findOrder(numCourses4, prerequisites4)}`);
