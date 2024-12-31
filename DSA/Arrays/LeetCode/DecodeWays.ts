type DecodeOptions = {
    numDecodings(s: string): number;
};

class DecoderWays implements DecodeOptions {
    /**
     * Decode a string of digits into numbers of possible ways
     * @param {string} s - Input string of digits
     * @returns Number of possible decoding ways
     */
    numDecodings(s: string): number {
        const n = s.length;

        // EDGE CASE
        if (n === 0 || s[0] === '0') return 0;

        const dp: number[] = new Array(n + 1).fill(0);

        dp[0] = 1;
        dp[1] = s[0] !== '0' ? 1 : 0;

        for (let i = 2; i <= n; i++) {
            const oneDigit = parseInt(s.slice(i - 1, i));
            if (oneDigit >= 1 && oneDigit <= 9) {
                dp[i] += dp[i - 1];
            }

            const twoDigit = parseInt(s.slice(i - 2, i));
            if (twoDigit >= 10 && twoDigit <= 26) {
                dp[i] += dp[i - 2];
            }
        }

        return dp[n];
    }
}
