function sumofSquaredDigits(number: number): number {
    let totalSum = 0;

    while (number) {
        let digit = number % 10;
        let temp = Math.floor(number / 10);
        number = temp;

        totalSum += digit ** 2;
    }

    return totalSum;
}

function isHappyNumber(n: number): boolean {
    let slow = n;
    let fast = sumofSquaredDigits(n);

    while (slow !== fast && fast !== 1) {
        slow = sumofSquaredDigits(slow);
        fast = sumofSquaredDigits(sumofSquaredDigits(fast));
    }

    if (fast === 1) {
        return true;
    }
    return false;
}

function main() {
    const inputs: number[] = [1, 5, 19, 25, 7];
    for (let i = 0; i < inputs.length; i++) {
        console.log(i + 1 + '.\tInput Number:', inputs[i]);

        let result = isHappyNumber(inputs[i]) ? 'True' : 'False';

        console.log('\tIs it a happy number?', result);
        console.log('-'.repeat(100));
    }
}

main();
