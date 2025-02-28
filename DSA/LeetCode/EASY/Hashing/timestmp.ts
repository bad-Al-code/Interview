class TimeStamp {
    private valuesDict: Record<string, string[]> = {};
    private timestampsDict: Record<string, number[]> = {};

    constructor() {}

    setValue(key: string, value: string, timestamp: number): void {
        if (key in this.valuesDict) {
            if (
                value !== this.valuesDict[key][this.valuesDict[key].length - 1]
            ) {
                this.valuesDict[key].push(value);
                this.timestampsDict[key].push(timestamp);
            }
        } else {
            this.valuesDict[key] = [value];
            this.timestampsDict[key] = [timestamp];
        }
    }

    private searchIndex(n: number, key: string, timestamp: number): number {
        let left = 0,
            right = n,
            mid = 0;
        while (left < right) {
            mid = Math.floor((left + right) / 2);
            if (this.timestampsDict[key][mid] <= timestamp) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left - 1;
    }

    getValue(key: string, timestamp: number): string {
        if (!(key in this.valuesDict)) {
            return '';
        } else {
            let index = this.searchIndex(
                this.timestampsDict[key].length,
                key,
                timestamp,
            );
            return index > -1 ? this.valuesDict[key][index] : '';
        }
    }
}

function main(): void {
    const ts = new TimeStamp();
    let num = 1;
    let random_value = 0;
    const input: [string, string, number][] = [
        ['course', 'OOP', 3],
        ['course', 'PF', 5],
        ['course', 'OS', 7],
        ['course', 'ALGO', 9],
        ['course', 'DB', 10],
    ];

    for (let i = 0; i < input.length; i++) {
        console.log(
            `${num}.\tAdd value: ("${input[i][0]}", "${input[i][1]}", ${input[i][2]})`,
        );
        ts.setValue(input[i][0], input[i][1], input[i][2]);
        random_value = Math.floor(Math.random() * 11);
        console.log('\n\tGet value for:');
        console.log('\t\tKey = course  \n\t\tTimestamp =', random_value);
        console.log(
            `\n\tReturned value = "${ts.getValue('course', random_value)}"`,
        );
        num += 1;
        console.log('-'.repeat(100));
    }
}

main();
