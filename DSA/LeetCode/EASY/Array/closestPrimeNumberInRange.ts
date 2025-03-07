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

    if (primePairs.length === 0) {
        return [-1, -1];
    } else {
        return primePairs;
    }
}

const left1 = 10;
const right1 = 19;
const left2 = 4;
const right2 = 6;
const left3 = 1;
const right3 = 100;
const left4 = 2;
const right4 = 2;

console.log(
    `Closest primes in range [${left1}, ${right1}]: ${closestPrimes(left1, right1)}`,
);
console.log(
    `Closest primes in range [${left2}, ${right2}]: ${closestPrimes(left2, right2)}`,
);
console.log(
    `Closest primes in range [${left3}, ${right3}]: ${closestPrimes(left3, right3)}`,
);
console.log(
    `Closest primes in range [${left4}, ${right4}]: ${closestPrimes(left4, right4)}`,
);
