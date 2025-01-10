function findBin(n: any): number {
    if (n <= 1) return n;
    return findBin(Math.floor(n / 2)) + findBin(n % 2);
}

const n = 3;
console.log(findBin(n));
