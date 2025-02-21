function setMatrixZeros(mat: number[][]): number[][] {
    const rows = mat.length;
    const cols = mat[0].length;
    let fcol = false;
    let frow = false;

    for (let i = 0; i < rows; i++) {
        if (mat[i][0] === 0) {
            fcol = true;
            break;
        }
    }

    for (let i = 0; i < cols; i++) {
        if (mat[0][i] === 0) {
            frow = true;
            break;
        }
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (mat[i][j] === 0) {
                mat[0][j] = mat[i][0] = 0; // set first element to zero  of that corrsoponding row's and cols'
            }
        }
    }

    for (let i = 1; i < rows; i++) {
        if (mat[i][0] === 0) {
            mat[i].fill(0);
        }
    }

    for (let i = 1; i < cols; i++) {
        if (mat[0][i] === 0) {
            for (let j = 1; j < rows; j++) {
                mat[j][i] = 0;
            }
        }
    }

    if (fcol) {
        for (let i = 0; i < rows; i++) {
            mat[i][0] = 0;
        }
    }

    if (frow) {
        mat[0].fill(0);
    }

    return mat;
}

function printMatrix(mat: number[][]) {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (j === 0) {
                process.stdout.write('\t' + mat[i][j] + '  ');
            } else {
                process.stdout.write(mat[i][j] + '  ');
            }
        }
        console.log();
    }
}

function main() {
    const mat = [
        [
            [1, 1, 0],
            [1, 0, 1],
            [1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1],
            [1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1],
        ],
        [
            [3, 5, 2, 0],
            [1, 0, 4, 6],
            [7, 3, 2, 4],
        ],
        [
            [1, 2, 3, 4],
            [4, 5, 6, 7],
            [8, 9, 4, 6],
        ],
        [
            [2, 6, 5, 4, 9, 1],
            [7, 2, 0, 0, 5, 4],
            [1, 1, 1, 1, 0, 1],
            [9, 8, 2, 0, 1, 3],
            [7, 8, 6, 5, 4, 3],
            [9, 8, 1, 2, 5, 6],
        ],
    ];

    for (let i = 0; i < mat.length; i++) {
        console.log(i + 1 + '. \tOriginal Matrix:');
        printMatrix(mat[i]);
        const result = setMatrixZeros(mat[i]);
        console.log('\n\tMatrix with Zeros:');
        printMatrix(result);
        console.log('-'.repeat(100));
    }
}

main();
