function calculateMinimumCoins(
    coins: number[],
    rem: number,
    counter: number[],
): number {
    if (rem < 0) return -1;
    if (rem === 0) return 0;

    if (counter[rem - 1] !== Number.MAX_SAFE_INTEGER) {
        return counter[rem - 1];
    }

    let minimum: number = Number.MAX_SAFE_INTEGER;
    for (const coin of coins) {
        const result: number = calculateMinimumCoins(
            coins,
            rem - coin,
            counter,
        );
        if (result >= 0 && result < minimum) {
            minimum = 1 + result;
        }
    }

    counter[rem - 1] = minimum !== Number.MAX_SAFE_INTEGER ? minimum : -1;
    return counter[rem - 1];
}

function coinChange(coins: number[], amount: number): number {
    if (amount < 1) return 0;

    const counter: number[] = new Array(amount).fill(Number.MAX_SAFE_INTEGER);
    return calculateMinimumCoins(coins, amount, counter);
}

function main() {
    let coins = [
        [1, 3, 4, 5],
        [1, 4, 6, 9],
        [6, 7, 8],
        [1, 2, 3, 4, 5],
        [14, 15, 18, 20],
    ];
    let total = [7, 11, 27, 41, 52];

    for (let i = 0; i < total.length; i++) {
        console.log(
            (i + 1).toString() +
                '.\tThe minimum number of coins required to find ' +
                total[i].toString() +
                ' from',
            coins[i],
            'is ' + coinChange(coins[i], total[i]).toString(),
        );
        console.log('-'.repeat(100));
    }
}

main();
