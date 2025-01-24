function reverseBits(n: number): number {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        const bit = n & 1;
        result = (result << 1) | bit;
        n = n >>> 1;
    }

    return result >>> 0;
}

console.log(reverseBits(43261596));
