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

function canFinishDFS(numCourses: number, prerequisites: number[][]): boolean {
    const adjList = new Map<number, number[]>();

    for (const [course, prereq] of prerequisites) {
        if (!adjList.has(prereq)) adjList.set(prereq, []);
        adjList.get(prereq)!.push(course);
    }

    const visited = new Array(numCourses).fill(false);
    const path = new Array(numCourses).fill(false);

    const hasCycle = (course: number): boolean => {
        if (path[course]) return true;
        if (visited[course]) return false;

        visited[course] = true;
        path[course] = true;

        if (adjList.has(course)) {
            for (const neighbor of adjList.get(course)!) {
                if (hasCycle(neighbor)) return true;
            }
        }

        path[course] = false;
        return false;
    };

    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i)) return false;
    }

    return true;
}

console.log(canFinish(numCourses, prerequisites));
console.log(canFinishDFS(numCourses, prerequisites));
