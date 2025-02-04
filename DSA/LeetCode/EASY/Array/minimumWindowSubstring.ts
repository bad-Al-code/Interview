/**
 * Function to find the minimum window substring in string `s` that contains all characters of string `t`.
 *
 * @param {string} s
 * @param {string} t
 * @returns {string}
 */
function minWindow(s: string, t: string): string {
    if (t === '') return '';

    const reqCount: Map<string, number> = new Map();
    const window: Map<string, number> = new Map();

    for (let i = 0; i < t.length; i++) {
        const currChar = t.charAt(i);

        reqCount.set(currChar, (reqCount.get(currChar) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        const currChar = t.charAt(i);

        window.set(currChar, 0);
    }

    let current = 0;
    const required = reqCount.size;
    console.log(required);

    let res: [number, number] = [-1, -1];
    let resLen = Infinity;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const currChar = s.charAt(right);

        if (t.indexOf(currChar) !== -1) {
            window.set(currChar, (window.get(currChar) || 0) + 1);
        }

        if (
            reqCount.has(currChar) &&
            window.get(currChar) == reqCount.get(currChar)
        ) {
            current += 1;
        }

        while (current === required) {
            if (right - left + 1 < resLen) {
                res = [left, right];
                resLen = right - left + 1;
            }

            const leftChar = s.charAt(left);
            if (t.indexOf(leftChar) !== -1) {
                window.set(leftChar, window.get(leftChar)! - 1);
            }

            if (
                reqCount.has(leftChar) &&
                window.get(leftChar)! < reqCount.get(leftChar)!
            ) {
                current -= 1;
            }

            left += 1;
        }
    }

    const [leftIndex, rightIndex] = res;

    return resLen !== Infinity ? s.slice(leftIndex, rightIndex + 1) : '';
}

function main() {
    const s: string[] = [
        'PATTERN',
        'LIFE',
        'ABRACADABRA',
        'STRIKER',
        'DFFDFDFVD',
    ];
    const t: string[] = ['TN', 'I', 'ABC', 'RK', 'VDD'];
    for (let i = 0; i < s.length; i++) {
        console.log(
            `${i + 1}.\ts: ${s[i]}\n\tt: ${t[i]}\n\tThe minimum substring containing ${t[i]} is: ${minWindow(s[i], t[i])}`,
        );
        console.log('-'.repeat(100));
    }
}

if (require.main === module) {
    main();
}
