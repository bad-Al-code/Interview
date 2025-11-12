/**
 * @param {number[][]} routes - Array of bus routes, ekdum simple!
 *                             Think like this: routes[0] = [1,2,3] means first bus
 *                             goes to stops 1, 2, and 3.
 *
 * @param {number} source - Starting point
 *
 * @param {number} target - Destination point
 *
 * @returns {number} Function returns:
 *                   - Minimum buses required (best case scenario!)
 *                   - 0 if source and target same place (full lucky!)
 *                   - -1 if no possible route exists (time to book Ola/Uber)
 */

function numBusesToDestination(
    routes: number[][],
    source: number,
    target: number,
): number {
    // EDGE CASE

    if (source === target) return 0;

    const adjacancyList: Map<number, number[]> = new Map();

    for (let i = 0; i < routes.length; i++) {
        for (let j of routes[i]) {
            if (!adjacancyList.has(j)) {
                adjacancyList.set(j, []);
            }

            adjacancyList.get(j)!.push(i);
        }
    }

    if (!adjacancyList.has(target) || !adjacancyList.has(target)) {
        return -1;
    }

    const queue: [number, number][] = [[source, 0]];
    const visitedBuses: Set<number> = new Set();
    const visitedStations: Set<number> = new Set([source]);

    while (queue.length > 0) {
        const [curStation, busCount] = queue.shift()!;

        const numberOfBuses = adjacancyList.get(curStation) || [];

        for (const i of numberOfBuses) {
            if (visitedBuses.has(i)) continue;

            visitedBuses.add(i);
            for (const nextStation of routes[i]) {
                if (nextStation === target) {
                    return busCount + 1;
                }

                if (!visitedStations.has(nextStation)) {
                    visitedStations.add(nextStation);

                    queue.push([nextStation, busCount + 1]);
                }
            }
        }
    }

    return -1;
}
