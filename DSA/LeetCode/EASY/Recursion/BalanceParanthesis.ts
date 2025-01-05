function balancedParanthesis(
    a: string[],
    startIndex: number = 0,
    currentIndex: number = 0,
): boolean {
    if (startIndex === a.length) {
        return currentIndex === 0;
    }

    if (currentIndex < 0) return false;

    if (a[startIndex] === '(') {
        return balancedParanthesis(a, startIndex + 1, currentIndex + 1);
    } else if (a[startIndex] === ')') {
        return balancedParanthesis(a, startIndex + 1, currentIndex + 1);
    } else {
        return false;
    }
}
