class QuietnessFinder {
    private readonly n: number;
    private readonly graph: Map<number, number[]>;
    private readonly quiet: number[];
    private readonly answer: number[];

    constructor(richer: number[][], quiet: number[]) {
        this.n = quiet.length;
        this.quiet = quiet;
        this.graph = new Map<number, number[]>();
        this.answer = Array(this.n).fill(-1);

        this._buildGraph(richer);
    }

    private _buildGraph(richer: number[][]): void {
        for (let i = 0; i < this.n; i++) {
            this.graph.set(i, []);
        }

        for (const [richerPerson, poorerPerson] of richer) {
            if (
                richerPerson >= 0 &&
                richerPerson < this.n &&
                poorerPerson >= 0 &&
                poorerPerson < this.n
            ) {
                (this.graph.get(poorerPerson) as number[]).push(richerPerson);
            } else {
                console.warn(
                    `Invalid pair in richer: [${richerPerson}, ${poorerPerson}]. Skipping.`,
                );
            }
        }
    }

    public findQuiettests(): number[] {
        for (let i = 0; i < this.n; i++) {
            if (this.answer[i] === -1) {
                this._dfs(i);
            }
        }

        return this.answer;
    }

    private _dfs(person: number): number {
        if (this.answer[person] !== -1) {
            return this.answer[person];
        }

        let quietestPersonIndex = person;
        let minQuietNess = this.quiet[person];
        const richerNeighbors = this.graph.get(person) || [];
        for (const neighbor of richerNeighbors) {
            const candidateIndex = this._dfs(neighbor);

            if (this.quiet[candidateIndex] < minQuietNess) {
                minQuietNess = this.quiet[candidateIndex];

                quietestPersonIndex = candidateIndex;
            }
        }

        this.answer[person] = quietestPersonIndex;

        return quietestPersonIndex;
    }
}

function loudAndRich(richer: number[][], quiet: number[]): number[] {
    const n = quiet.length;
    if (n === 0) {
        return [];
    }

    if (!richer || !Array.isArray(richer)) {
        throw new Error('Richer must ber an array');
    }

    try {
        const finder = new QuietnessFinder(richer, quiet);

        return finder.findQuiettests();
    } catch (error) {
        console.error('An error occurred: ', error);

        return Array.from({ length: n }, (_, i) => i);
    }
}

const richer1 = [
    [1, 0],
    [2, 1],
    [3, 1],
    [3, 7],
    [4, 3],
    [5, 3],
    [6, 3],
];
const quiet1 = [3, 2, 5, 4, 6, 1, 7, 0];
console.log(`Result: ${loudAndRich(richer1, quiet1)}`);

const richer2 = [[]];
const quiet2 = [0];
console.log(`Result: ${loudAndRich(richer2, quiet2)}`);
