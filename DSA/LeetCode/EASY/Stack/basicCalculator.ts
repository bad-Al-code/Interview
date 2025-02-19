function calculate(s: string): number {
    let i: number,
        number: number = 0;
    let operationStack: number[] = [];
    let result: number = 0;
    let signValue: number = 1;
    let length: number = s.length;

    for (i = 0; i < length; i++) {
        let c: string = s[i];

        if (!isNaN(parseInt(c))) {
            number = number * 10 + parseInt(c);
        }

        if ('+-'.includes(c)) {
            result += number * signValue;
            signValue = c === '-' ? -1 : 1;
            number = 0;
        } else if (c === '(') {
            operationStack.push(result);
            operationStack.push(signValue);

            result = 0;
            signValue = 1;
        } else if (c === ')') {
            result += signValue * number;
            let popSignValue = operationStack.pop()!;
            result *= popSignValue;
            let secondValue = operationStack.pop()!;
            result += secondValue;
            number = 0;
        }
    }
    return result + number * signValue;
}
