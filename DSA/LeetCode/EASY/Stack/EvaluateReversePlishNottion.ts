function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (!isNaN(Number(token))) {
            // Token is a number, push it onto the stack
            stack.push(Number(token));
        } else {
            // Token is an operator, pop two elements from the stack
            const b = stack.pop()!;
            const a = stack.pop()!;

            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(Math.trunc(a / b)); // Truncate towards zero
                    break;
                default:
                    throw new Error(`Invalid operator: ${token}`);
            }
        }
    }

    // The result is the only element left in the stack
    return stack.pop()!;
}

// Example usage:
const tokens = ['2', '1', '+', '3', '*'];
console.log(evalRPN(tokens)); // Output: 9
