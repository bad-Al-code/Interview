function closestPrimes(left: number, right: number): number[] {
    function isPrime(n: number): boolean {
        if (n <= 1) return false;

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }

        return true;
    }

    let primePairs: number[] = [];
    let minDiff = Infinity;
    let prevPrime = -1;

    for (let i = left; i <= right; i++) {
        if (isPrime(i)) {
            if (prevPrime !== -1) {
                const diff = i - prevPrime;
                if (diff < minDiff) {
                    minDiff = diff;
                    primePairs = [prevPrime, i];
                }
            }

            prevPrime = i;
        }
    }

    return primePairs;
}
