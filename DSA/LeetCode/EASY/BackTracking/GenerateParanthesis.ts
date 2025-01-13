function generateParHelp(
    openP: number,
    closeP: number,
    n: number,
    result: string[],
    current: string[],
): void {
    if (openP === n && closeP === n) {
        result.push(current.join(''));
        return;
    }

    if (openP < n) {
        current.push('(');
        generateParHelp(openP + 1, closeP, n, result, current);
        current.pop();
    }

    if (closeP < openP) {
        current.push(')');
        generateParHelp(openP, closeP + 1, n, result, current);
        current.pop();
    }
}

function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    const current: string[] = [];

    generateParHelp(0, 0, n, result, current);
    return result;
}

console.log(generateParenthesis(2));
