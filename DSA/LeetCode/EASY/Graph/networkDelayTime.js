function networkDelayTime(times, n, k) {
    const adjacency = new Map();

    for (const time of times) {
        const src = time[0];
        const dst = time[1];
        const t = time[2];

        if (!adjacency.has(src)) {
            adjacency.set(src, []);
        }

        adjacency.get(src).push([dst, t]);
    }

    const pq = [];
    pq.push({ node: k, time: 0 });
    const visited = new Set();
    let delays = 0;

    while (pq.length > 0) {
        pq.sort((a, b) => a.time - b.time);

        const { time, node } = pq.shift();

        if (visited.has(node)) {
            continue;
        }

        visited.add(node);
        delays = Math.max(delays, time);
        const neighbors = adjacency.get(node) || [];

        for (const neighbor of neighbors) {
            const neighborNode = neighbor[0];
            const neighborTime = neighbor[1];

            if (!visited.has(neighborNode)) {
                const newTime = time + neighborTime;
                pq.push({ node: neighborNode, time: newTime });
            }
        }
    }

    if (visited.size === n) {
        return delays;
    }

    return -1;
}

function main() {
    const times = [
        [
            [2, 1, 1],
            [3, 2, 1],
            [3, 4, 2],
        ],
        [
            [2, 1, 1],
            [1, 3, 1],
            [3, 4, 2],
            [5, 4, 2],
        ],
        [
            [1, 2, 1],
            [2, 3, 1],
            [3, 4, 1],
        ],
        [
            [1, 2, 1],
            [2, 3, 1],
            [3, 5, 2],
        ],
        [[1, 2, 2]],
    ];

    const n = [4, 5, 4, 5, 2];
    const k = [3, 1, 1, 1, 2];

    for (let i = 0; i < times.length; ++i) {
        console.log(
            `${i + 1}.\t times = [${times[i].map((t) => `[${t.join(', ')}]`).join(', ')}]`,
        );
        console.log(`\t number of nodes 'n' = ${n[i]}`);
        console.log(`\t starting node 'k' = ${k[i]}\n`);
        console.log(
            `\t Minimum amount of time required = ${networkDelayTime(times[i], n[i], k[i])}`,
        );
        console.log('-'.repeat(100));
    }
}

main();
