function printPascal(a: number): number[] {
    let line = [1];

    if (a === 0) return [1];
    else {
        let previousLine = printPascal(a - 1);

        for (let i = 0; i < previousLine.length - 1; i++) {
            line.push(previousLine[i] + previousLine[i + 1]);
        }

        line.push(1);
    }
    return line;
}
