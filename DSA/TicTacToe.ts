type Player = 1 | 2;

interface TicTacToeConfig {
    boardSize: number;
}

class TicTacToe {
    private readonly boardSize: number;
    private readonly board: number[][];

    private readonly rowCounts: number[][];
    private readonly colCounts: number[][];
    private readonly diagonalCounts: [number, number];
    private readonly antiDiagonalCounts: [number, number];

    constructor(config: TicTacToeConfig) {
        this.validateBoardSize(config.boardSize);

        this.boardSize = config.boardSize;

        this.board = Array.from({ length: this.boardSize }, () => [0, 0]);
        this.rowCounts = Array.from({ length: this.boardSize }, () => [0, 0]);
        this.colCounts = Array.from({ length: this.boardSize }, () => [0, 0]);
        this.diagonalCounts = [0, 0];
        this.antiDiagonalCounts = [0, 0];
    }

    private validateBoardSize(size: number): void {
        if (size < 3 || size > 9) {
            throw new Error('Board size must be between 3 and 9.');
        }
    }

    private validateMove(row: number, col: number, player: Player): void {
        if (
            row < 0 ||
            row >= this.boardSize ||
            col < 0 ||
            col >= this.boardSize
        ) {
            throw new Error('Move is out of borad bounds');
        }

        if (player !== 1 && player !== 2) {
            throw new Error('Invalid player. Must be 1 or 2');
        }

        if (this.board[row][col] !== 0) {
            throw new Error('Cell is already occupied');
        }
    }

    move(row: number, col: number, player: Player): number {
        this.validateMove(row, col, player);

        this.board[row][col] = player;

        const playerIndex = player - 1;

        this.rowCounts[row][playerIndex]++;
        this.colCounts[row][playerIndex]++;

        if (
            this.rowCounts[row][playerIndex] === this.boardSize ||
            this.colCounts[col][playerIndex] === this.boardSize
        ) {
            return player;
        }

        if (row === col) {
            this.diagonalCounts[playerIndex]++;
            if (this.diagonalCounts[playerIndex] === this.boardSize) {
                return player;
            }
        }

        if (row + col === this.boardSize - 1) {
            this.antiDiagonalCounts[playerIndex]++;
            if (this.antiDiagonalCounts[playerIndex] === this.boardSize) {
                return player;
            }
        }
        return 0;
    }

    getBoardSize(): number[][] {
        return this.board.map((row) => [...row]);
    }
}

function demonstrateTicTacToe() {
    console.log('Tic-Tac-Toe Game Demonstration:');

    const game = new TicTacToe({ boardSize: 4 });

    const moves: [number, number, Player][] = [
        [0, 0, 1],
        [1, 1, 2],
        [0, 1, 1],
        [1, 2, 2],
        [0, 2, 1],
        [1, 3, 2],
        [0, 3, 1],
    ];

    moves.forEach(([row, col, player], index) => {
        console.log(`Move ${index + 1}: Player ${player} at (${row}, ${col})`);
        const result = game.move(row, col, player);

        if (result !== 0) {
            console.log(`🏆 Player ${result} wins! 🏆`);
        }
    });
}

demonstrateTicTacToe();
