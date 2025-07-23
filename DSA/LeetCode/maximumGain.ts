function processStringForPair(s: string, char1: string, char2: string, score: number): { gain: number, remainingString: string } {
    const stack: string[] = [];
    let currentGain = 0;

    for (const char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char1 && char === char2) {
            stack.pop();

            currentGain += score;
        } else {
            stack.push(char);
        }
    }

    return {
        gain: currentGain,
        remainingString: stack.join(''),
    };
}

function maximumGain(s: string, x: number, y: number): number {
    let totalScore = 0;
    let currentString = s;

    if (x > y) {
        const result1 = processStringForPair(currentString, 'a', 'b', x);
        totalScore += result1.gain;
        currentString = result1.remainingString;

        const result2 = processStringForPair(currentString, 'b', 'a', y);
        totalScore += result2.gain;
    } else { 
        const result1 = processStringForPair(currentString, 'b', 'a', y);
        totalScore += result1.gain;
        currentString = result1.remainingString;

        const result2 = processStringForPair(currentString, 'a', 'b', x);
        totalScore += result2.gain;
    }

    return totalScore;
}

console.log(maximumGain("cdbcbbaaabab", 4, 5));
console.log(maximumGain("aabbaaxybbaabb", 5, 4));