function removeDupliacates(s: string): string {
    const stack: string[] = [];

    for (let i of s) {
        const top = stack.length - 1;

        if (stack.length > 0 && stack[top] === i) {
            stack.pop();
        } else {
            stack.push(i);
        }
    }

    return stack.join('');
}

function main() {
    const inputs: string[] = [
        'g',
        'ggaabcdeb',
        'abbddaccaaabcd',
        'aannkwwwkkkwna',
        'abbabccblkklu',
    ];

    for (let i = 0; i < inputs.length; i++) {
        console.log(i + 1 + `.\tRemove duplicates from string: '${inputs[i]}'`);
        let resultingString = removeDupliacates(inputs[i]);
        console.log(`\tString affter removing duplicates: `, resultingString);
        console.log('-'.repeat(100));
    }
}

main();
