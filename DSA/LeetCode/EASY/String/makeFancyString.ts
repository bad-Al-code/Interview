class FancyStringBuilder {
    private resultChars: string[];

    constructor() {
        this.resultChars = [];
    }

    public append(char: string) {
        if (this.canAppend(char)) {
            this.resultChars.push(char);
        }
    }

    private canAppend(char: string): boolean {
        const currentLength = this.resultChars.length;
        if (currentLength < 2) {
            return true;
        }

        const lastChar = this.resultChars[currentLength - 1];
        const secondLastChar = this.resultChars[currentLength - 2];

        if (char === lastChar && char === secondLastChar) {
            return false;
        }

        return true;
    }

    public build(): string {
        return this.resultChars.join('');
    }
}

function makeFancyString(s: string): string {
    const builder = new FancyStringBuilder();

    for (const char of s) {
        builder.append(char);
    }

    return builder.build();
}

console.log(makeFancyString('leeetcode'));
console.log(makeFancyString('aaabaaaa'));
console.log(makeFancyString('aab'));
