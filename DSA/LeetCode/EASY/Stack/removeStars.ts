function removeStars(s: string): string {
    const stack: string[] = [];

    for (const char of s) {
        if (char === '*') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
}

const testCases = ['leet**cod*e', 'erase*****', 'abc*de**f', 'a*b*c*d*'];

testCases.forEach((test, index) => {
    console.log(`Test Case ${index + 1}: "${test}" -> "${removeStars(test)}"`);
    console.log('='.repeat(100));
});
