function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const inDegree = new Array(numCourses).fill(0);
    const adjList = new Map<number, number[]>();

    for (const [course, prereq] of prerequisites) {
        inDegree[course]++;
        if (!adjList.has(prereq)) adjList.set(prereq, []);
        adjList.get(prereq)!.push(course);
    }

    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    let completedCourses = 0;

    while (queue.length > 0) {
        const course = queue.shift()!;
        completedCourses++;

        if (adjList.has(course)) {
            for (const neighbor of adjList.get(course)!) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] === 0) queue.push(neighbor);
            }
        }
    }

    return completedCourses === numCourses;
}

const numCourses = 4;
const prerequisites = [
    [1, 0],
    [2, 1],
    [3, 2],
];

console.log(canFinish(numCourses, prerequisites));
