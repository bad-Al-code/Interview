const CAPTURED = 'X';
const FREE = 'O';
const TEMP_MARKER = '#';

interface Position {
    row: number;
    col: number;
}

interface IGrid {
    getRows(): number;
    getCols(): number;
    getValue(row: number, col: number): string;
    setValue(row: number, col: number, value: string): void;
    isValid(row: number, col: number): boolean;
}

class Board implements IGrid {
    private readonly data: string[][];
    private readonly rows: number;
    private readonly cols: number;

    constructor(initialData: string[][]) {
        if (
            !initialData ||
            initialData.length === 0 ||
            initialData[0].length === 0
        ) {
            this.data = [];
            this.rows = 0;
            this.cols = 0;
        } else {
            this.data = initialData;
            this.rows = initialData.length;
            this.cols = initialData[0].length;
        }
    }

    getRows(): number {
        return this.rows;
    }

    getCols(): number {
        return this.cols;
    }

    isValid(row: number, col: number): boolean {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }

    getValue(row: number, col: number): string {
        return this.data[row][col];
    }

    setValue(row: number, col: number, value: string): void {
        this.data[row][col] = value;
    }
}

interface ISurroundedRegionSolver {
    solve(grid: IGrid): void;
}

class BorderTraversalSolver implements ISurroundedRegionSolver {
    private readonly directions: Position[] = [
        { row: -1, col: 0 },
        { row: 1, col: 0 },
        { row: 0, col: -1 },
        { row: 0, col: 1 },
    ];

    private rows: number = 0;
    private cols: number = 0;

    solve(grid: IGrid): void {
        this.rows = grid.getRows();
        this.cols = grid.getCols();

        if (this.rows === 0 || this.cols === 0) {
            return;
        }

        for (let r = 0; r < this.rows; r++) {
            if (grid.getValue(r, 0) === FREE) {
                this.markConnected(r, 0, grid);
            }
            if (grid.getValue(r, this.cols - 1) === FREE) {
                this.markConnected(r, this.cols - 1, grid);
            }
        }
        for (let c = 0; c < this.cols; c++) {
            if (grid.getValue(0, c) === FREE) {
                this.markConnected(0, c, grid);
            }
            if (grid.getValue(this.rows - 1, c) === FREE) {
                this.markConnected(this.rows - 1, c, grid);
            }
        }

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const value = grid.getValue(r, c);
                if (value === FREE) {
                    grid.setValue(r, c, CAPTURED);
                } else if (value === TEMP_MARKER) {
                    grid.setValue(r, c, FREE);
                }
            }
        }
    }

    private markConnected(row: number, col: number, grid: IGrid): void {
        if (!grid.isValid(row, col)) {
            return;
        }
        if (grid.getValue(row, col) !== FREE) {
            return;
        }

        grid.setValue(row, col, TEMP_MARKER);

        for (const dir of this.directions) {
            this.markConnected(row + dir.row, col + dir.col, grid);
        }
    }
}

function solve(board: string[][]): void {
    if (!board || board.length === 0 || board[0].length === 0) {
        return;
    }

    const grid: IGrid = new Board(board);

    const solver: ISurroundedRegionSolver = new BorderTraversalSolver();

    solver.solve(grid);
}

const exampleBoard1: string[][] = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
];

console.log('Original Board 1:');
exampleBoard1.forEach((row) => console.log(row.join('\t')));

solve(exampleBoard1);

console.log('\nModified Board 1:');
exampleBoard1.forEach((row) => console.log(row.join('\t')));

const exampleBoard2: string[][] = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
];

console.log('\nOriginal Board 2:');
exampleBoard2.forEach((row) => console.log(row.join('\t')));

solve(exampleBoard2);

console.log('\nModified Board 2:');
exampleBoard2.forEach((row) => console.log(row.join('\t')));

const exampleBoard3: string[][] = [
    ['O', 'O', 'O'],
    ['O', 'O', 'O'],
    ['O', 'O', 'O'],
];
console.log('\nOriginal Board 3:');
exampleBoard3.forEach((row) => console.log(row.join('\t')));
solve(exampleBoard3);
console.log('\nModified Board 3:');
exampleBoard3.forEach((row) => console.log(row.join('\t')));
