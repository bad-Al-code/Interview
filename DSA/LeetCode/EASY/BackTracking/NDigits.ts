function increasingNumbers(n: number): number[] {
    const result: number[] = [];

    if (n === 1) result.push(0);

    const backtrack = (
        current: number[],
        start: number,
        left: number,
    ): void => {
        if (left === 0) {
            // Create a number from the current array and push it to the result
            result.push(parseInt(current.join('')));
            return;
        }

        for (let i = start; i <= 9; i++) {
            current.push(i); // Add the current digit
            backtrack(current, i + 1, left - 1); // Recursive call
            current.pop()!; // Remove the last digit to backtrack
        }
    };

    backtrack([], 1, n); // Start the recursion
    return result;
}

console.log(increasingNumbers(2));
