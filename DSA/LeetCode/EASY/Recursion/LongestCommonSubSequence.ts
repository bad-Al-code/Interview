function longestCommonSubsequenceRecursive(
    text1: string,
    text2: string,
): number {
    function lcsRecursive(i: number, j: number): number {
        if (i === text1.length || j === text2.length) {
            return 0;
        }

        if (text1[i] === text2[j]) {
            return 1 + lcsRecursive(i + 1, j + 1);
        } else {
            return Math.max(lcsRecursive(i + 1, j), lcsRecursive(i, j + 1));
        }
    }

    return lcsRecursive(0, 0);
}

function longestCommonSubsequence(text1: string, text2: string): number {
    const memo: Record<string, number> = {};

    function lcsRecursive(i: number, j: number): number {
        if (i === text1.length || j === text2.length) {
            return 0;
        }

        const key = `${i},${j}`;
        if (key in memo) {
            return memo[key];
        }

        if (text1[i] === text2[j]) {
            memo[key] = 1 + lcsRecursive(i + 1, j + 1);
        } else {
            memo[key] = Math.max(
                lcsRecursive(i + 1, j),
                lcsRecursive(i, j + 1),
            );
        }

        return memo[key];
    }

    return lcsRecursive(0, 0);
}

const text1 = 'abcde';
const text2 = 'ace';
console.log(longestCommonSubsequence(text1, text2));
