interface ILog {
    id: number;
    isStart: boolean;
    time: number;
}

class Log implements ILog {
    private strs: string[];
    public id: number;
    public isStart: boolean;
    public time: number;

    constructor(content: string) {
        content = content.replace(/\s+/g, '');
        this.strs = content.split(':');
        this.id = parseInt(this.strs[0], 10);
        this.isStart = this.strs[1] === 'start';
        this.time = parseInt(this.strs[2], 10);
    }
}

function exclusiveTime(n: number, logs: string[]): number[] {
    const logStack: Log[] = [];
    const result: number[] = new Array(n).fill(0);

    for (let content of logs) {
        const log = new Log(content);
        if (log.isStart) {
            logStack.push(log);
        } else {
            const top = logStack.pop()!;
            result[top.id] += log.time - top.time + 1;

            if (logStack.length > 0) {
                result[logStack[logStack.length - 1].id] -=
                    log.time - top.time + 1;
            }
        }
    }

    return result;
}

function printArray<T>(arr: T[]): string {
    let result = '[';
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result += printArray(arr[i] as T[]);
        } else {
            result += `'${arr[i]}'`;
        }
        if (i != arr.length - 1) result += ', ';
    }
    return (result += ']');
}

function main() {
    let logs: string[][] = [
            [
                '0:start:0',
                '1:start:2',
                '1:end:3',
                '2:start:4',
                '2:end:7',
                '0:end:8',
            ],
            [
                '0:start:0',
                '0:start:2',
                '0:end:5',
                '1:start:6',
                '1:end:6',
                '0:end:7',
            ],
            ['0:start:0', '1:start:5', '1:end:6', '0:end:7'],
            [
                '0:start:0',
                '1:start:5',
                '2:start:8',
                '3:start:12',
                '4:start:15',
                '5:start:19',
                '5:end:22',
                '4:end:24',
                '3:end:27',
                '2:end:32',
                '1:end:35',
                '0:end:36',
            ],
            ['0:start:0', '1:start:3', '1:end:6', '0:end:10'],
        ],
        n: number[] = [3, 2, 2, 6, 2],
        x = 1;

    for (let i = 0; i < n.length; i++) {
        console.log(x + '.\tn =', n[i]);
        console.log('\tlogs =', printArray(logs[i]));
        console.log('\tOutput:', exclusiveTime(n[i], logs[i]));
        console.log('-'.repeat(100), '\n');
        x += 1;
    }
}

main();
