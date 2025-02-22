/**
 * @param {string[][]} watchedVideos
 * @param { number } id
 * @param { number } level
 *
 * @example
 * Input: watchedVideos = [["A","B"],["C"],["B","C"],["D"]], friends = [[1,2],[0,3],[0,3],[1,2]], id = 0, level = 1
 * Output: ["B","C"]
 * Explanation:
 * You have id = 0 (green color in the figure) and your friends are (yellow color in the figure):
 * Person with id = 1 -> watchedVideos = ["C"]
 * Person with id = 2 -> watchedVideos = ["B","C"]
 * The frequencies of watchedVideos by your friends are:
 * B -> 1
 * C -> 2
 * @returns { string[] }
 */
function watchedVideosByFriends(
    watchedVideos: string[][],
    friends: number[][],
    id: number,
    level: number,
): string[] {
    const friendsLength = friends.length;
    // BFS Approach
    const queue: number[] = [id];
    const visited = new Set<number>([id]);

    for (let i = 0; i < level; i++) {
        const nextQueue: number[] = [];
        for (const person of queue) {
            for (const friend of friends[person]) {
                if (!visited.has(friend)) {
                    visited.add(friend);
                    nextQueue.push(friend);
                }
            }
        }

        queue.length = 0;
        queue.push(...nextQueue);
    }

    const videoCount = new Map<string, number>();
    for (const friend of queue) {
        for (const video of watchedVideos[friend]) {
            videoCount.set(video, (videoCount.get(video) || 0) + 1);
        }
    }

    return [...videoCount.keys()].sort((a, b) => {
        const freqA = videoCount.get(a)!;
        const freqB = videoCount.get(b)!;

        return freqA === freqB ? a.localeCompare(b) : freqA - freqB;
    });
}

const watchedVideos = [['A', 'B'], ['C'], ['B', 'C'], ['D']];
const friends = [
    [1, 2],
    [0, 3],
    [0, 3],
    [1, 2],
];
const id = 0;
const level = 2;

console.log(watchedVideosByFriends(watchedVideos, friends, id, level));
