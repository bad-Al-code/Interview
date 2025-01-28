function fibonaccciNumber(n: number): number {
    if (n < 2) {
        return n;
    }

    const dp: number[] = [1, 2];
    let i = 2;

    while (i <= n) {
        let temp = dp[1];
        dp[1] = dp[1] + dp[0];
        dp[0] = temp;
        i++;
    }

    return dp[1];
}

console.log(fibonaccciNumber(100));
