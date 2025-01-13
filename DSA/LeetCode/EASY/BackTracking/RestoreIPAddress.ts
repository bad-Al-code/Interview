function restoreIpAddresses(s: string): string[] {
    const result: string[] = [];
    const current: string[] = [];

    if (s.length < 4 || s.length > 12) return result;

    for (let i = 0; i < s.length; i++) {
        if (s[i] < '0' || s[i] > '9') return result;
    }

    const isWindowValid = (window: string): boolean => {
        return parseInt(window) < 256;
    };

    const helper = (i: number, dots: number, current: string[]): void => {
        if (dots === 4 && i === s.length) {
            result.push(current.join('.'));
            console.log(result);
            return;
        }

        if (dots > 4 || i >= s.length) return;

        for (let j = i; j < Math.min(i + 3, s.length); j++) {
            if (i !== j && s[i] === '0') continue;
            const window = s.substring(i, j + 1);
            if (isWindowValid(window)) {
                current.push(window);
                helper(j + 1, dots + 1, current);
                current.pop();
            }
        }
    };

    helper(0, 0, current);
    return result;
}
