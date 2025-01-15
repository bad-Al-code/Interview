function dfs(
    row: number,
    col: number,
    board: string[][],
    word: string,
): boolean {
    // base case
    if (word.length === 0) return true;

    if (
        row < 0 ||
        row === board.length ||
        col < 0 ||
        col === board[0].length ||
        board[row][col] !== word[0]
    ) {
        return false;
    }

    let result = false;
    board[row][col] = '*';

    let offsets = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    for (let offset of offsets) {
        let rowOffset = offset[0];
        let colOffset = offset[1];

        result = dfs(row + rowOffset, col + colOffset, board, word);

        if (result) break;
    }

    board[row][col] = word[0];
    return result;
}

function wordSearch(board: string[][], word: string): boolean {
    let n = board.length;
    let m = board[0].length;

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (dfs(row, col, board, word)) return true;
        }
    }

    return false;
}

function printGridNeighbors(
    row: number,
    col: number,
    board: string[][],
    offset: string,
): void {
    let result = '';
    let onLeft = '';

    if (row > 0)
        result =
            result +
            offset +
            (col == 0 ? '|' : '_|') +
            board[row - 1][col] +
            '|_' +
            '\n';

    if (col > 0) {
        onLeft = offset + board[row][col - 1];
        result = result + onLeft + '{' + board[row][col] + '}';
    } else {
        result = result + offset + '{' + board[row][col] + '}';
    }

    if (col < board[0].length - 1) {
        result = result + board[row][col + 1];
    }
    if (row < board.length - 1) {
        result =
            result +
            '\n' +
            offset +
            (col == 0 ? '|' : String.fromCharCode(8254) + '|') +
            board[row + 1][col] +
            '|' +
            String.fromCharCode(8254);
    }
    console.log(result);
}

function main() {
    let input: (string | string[][])[][] = [
        [
            [
                ['O', 'Y', 'O', 'I'],
                ['B', 'I', 'E', 'M'],
                ['K', 'D', 'Y', 'R'],
                ['M', 'T', 'W', 'I'],
                ['Z', 'I', 'T', 'O'],
            ],
            'DYNAMIC',
        ],

        [
            [
                ['h', 'e', 'c', 'm', 'l'],
                ['w', 'l', 'i', 'e', 'u'],
                ['a', 'r', 'r', 's', 'n'],
                ['s', 'i', 'i', 'o', 'r'],
            ],
            'WARRIOR',
        ],

        [
            [
                ['C', 'Q', 'N', 'A'],
                ['P', 'S', 'E', 'I'],
                ['Z', 'A', 'P', 'E'],
                ['J', 'V', 'T', 'K'],
            ],
            'SAVE',
        ],

        [[['A']], 'ABC'],

        [
            [
                ['P', 'S', 'S', 'I', 'W', 'P'],
                ['P', 'Y', 'C', 'A', 'Q', 'T'],
                ['I', 'S', 'H', 'P', 'F', 'Y'],
                ['M', 'T', 'O', 'L', 'O', 'I'],
                ['J', 'I', 'N', 'O', 'G', 'K'],
                ['I', 'M', 'D', 'T', 'Y', 'T'],
            ],
            'PSYCHOLOGY',
        ],
    ];
    let num = 1;

    input.forEach((i) => {
        console.log(num + '.\tGrid = ');
        for (let j = 0; j < i[0].length; j++) console.log('\t\t', i[0][j]);
        if (i[1] == '') console.log(`\n\tWord = ""`);
        else console.log('\n\tWord = ', i[1]);
        console.log('\n\tProcessing...');
        let search_result = wordSearch(i[0], i[1]);
        if (search_result) console.log('\n\tSearch result = Found Word');
        else console.log('\n\tSearch result = Word could not be found');
        num++;
        console.log('-'.repeat(100));
    });
}

main();
