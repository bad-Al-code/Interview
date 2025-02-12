/**
 * Find the least number of units of the time the CPU will take to perform.
 *
 * @param {string[]} tasks
 * @param { number } n
 */
function leastTime(tasks: string[], n: number): number {
    const frequencies = new Map<string, number>();

    for (const task of tasks) {
        frequencies.set(task, (frequencies.get(task) || 0) + 1);
    }

    const sortedFrequencies = Array.from(frequencies.entries()).sort(
        (a, b) => a[1] - b[1],
    );

    const maxFreq = sortedFrequencies[sortedFrequencies.length - 1][1];
    sortedFrequencies.pop();

    let idleTime = (maxFreq - 1) * n;

    while (sortedFrequencies.length > 0 && idleTime > 0) {
        idleTime -= Math.min(
            maxFreq - 1,
            sortedFrequencies[sortedFrequencies.length - 1][1],
        );
        sortedFrequencies.pop();
    }

    idleTime = Math.max(0, idleTime);

    return tasks.length + idleTime;
}

function main() {
    const allTasks: string[][] = [
        ['A', 'A', 'B', 'B'],
        ['A', 'A', 'A', 'B', 'B', 'C', 'C'],
        ['S', 'I', 'V', 'U', 'W', 'D', 'U', 'X'],
        ['M', 'A', 'B', 'M', 'A', 'A', 'Y', 'B', 'M'],
        [
            'A',
            'K',
            'X',
            'M',
            'W',
            'D',
            'X',
            'B',
            'D',
            'C',
            'O',
            'Z',
            'D',
            'E',
            'Q',
        ],
        ['A', 'C', 'A', 'B', 'D', 'B'],
        ['A', 'A', 'A', 'B', 'B', 'B'],
    ];
    const allNs: number[] = [2, 1, 0, 3, 3, 1, 3];

    for (let i = 0; i < allTasks.length; i++) {
        console.log(`${i + 1}.`, '\tTasks: ', allTasks[i]);
        console.log('\tn: ', allNs[i]);

        const minTime = leastTime(allTasks[i], allNs[i]);
        console.log('\tMinimum tme required to execute the tasks: ', minTime);
        console.log('='.repeat(100));
    }
}

main();
