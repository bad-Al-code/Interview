interface AreAnagrams {
    s1: string;
    s2: string;
}

function areAnagrams({ s1, s2 }: AreAnagrams): boolean {
    if (s1.length !== s2.length) {
        return false;
    }

    const charCount = new Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);

    for (let i = 0; i < s1.length; i++) {
        charCount[s1.charCodeAt(i) - aCharCode]++;
        charCount[s2.charCodeAt(i) - aCharCode]--;
    }

    for (let count of charCount) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
}

interface CheckScrambleRecursive {
    s1: string;
    s2: string;
    memo: Map<string, boolean>;
}

function checkScrambleRecursive({
    s1,
    s2,
    memo,
}: CheckScrambleRecursive): boolean {
    const key = s1 + '#' + s2;
    if (memo.has(key)) {
        return memo.get(key)!;
    }

    if (s1 === s2) {
        memo.set(key, true);
        return true;
    }

    if (!areAnagrams({ s1, s2 })) {
        memo.set(key, false);
        return false;
    }

    const n = s1.length;
    for (let i = 1; i < n; i++) {
        const s1_left = s1.slice(0, i);
        const s1_right = s1.slice(i);

        const s2_left_noswap = s2.slice(0, i);
        const s2_right_noswap = s2.slice(i);

        if (
            checkScrambleRecursive({ s1: s1_left, s2: s2_left_noswap, memo }) &&
            checkScrambleRecursive({ s1: s1_right, s2: s2_right_noswap, memo })
        ) {
            memo.set(key, true);

            return true;
        }

        const s2_suffix_for_s1_left = s2.slice(n - i);
        const s2_prefix_for_s1_right = s2.slice(0, n - i);
        if (
            checkScrambleRecursive({
                s1: s1_left,
                s2: s2_suffix_for_s1_left,
                memo,
            }) &&
            checkScrambleRecursive({
                s1: s1_right,
                s2: s2_prefix_for_s1_right,
                memo,
            })
        ) {
            memo.set(key, true);
            return true;
        }
    }

    memo.set(key, false);

    return false;
}

function isScramble(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) {
        return false;
    }

    if (s1.length === 0) {
        return true;
    }

    const memo = new Map<string, boolean>();
    const result = checkScrambleRecursive({ s1, s2, memo });

    return result;
}

console.log(isScramble('great', 'rgeat'));
console.log(isScramble('acbcde', 'caebd'));
console.log(isScramble('a', 'a'));
