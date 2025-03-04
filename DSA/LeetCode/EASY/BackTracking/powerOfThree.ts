function checkPowersOfThree(n: number): boolean {
    const powers: number[] = [];

    let power = 1;
    while (power <= n) {
        powers.push(power);
        power *= 3;
    }

    const backtrack = (index: number, remaining: number): boolean => {
        if (remaining === 0) return true;
        if (index < 0 || remaining < 0) return false;

        if (backtrack(index - 1, remaining - powers[index])) return true;
        return backtrack(index - 1, remaining);
    };

    return backtrack(powers.length - 1, n);
}
