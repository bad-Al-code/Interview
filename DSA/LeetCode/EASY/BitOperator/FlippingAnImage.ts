function flipAndInvertImage(image: number[][]): number[][] {
    let rowCount = image.length;

    let mid = Math.floor((rowCount + 1) / 2);

    for (let i = 0; i < rowCount; i++) {
        let row = image[i];

        for (let j = 0; j < mid; j++) {
            let temp = row[j] ^ 1;
            row[j] = row[row.length - 1 - j] ^ 1;
            row[row.length - 1 - j] = temp;
        }
    }
    return image;
}

function main() {
    let inputs = [
        [
            [1, 1, 0],
            [1, 0, 1],
            [0, 0, 0],
        ],
        [
            [1, 1, 0, 0],
            [1, 0, 0, 1],
            [0, 1, 1, 1],
            [1, 0, 1, 0],
        ],

        [
            [1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0],
            [0, 1, 1, 1, 1],
            [0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0],
        ],

        [
            [0, 0, 1],
            [1, 0, 1],
            [0, 1, 0],
        ],

        [
            [1, 1, 1],
            [0, 0, 0],
            [1, 1, 1],
        ],
    ];

    for (let i = 0; i < inputs.length; i++) {
        console.log(i + 1 + '.\t Original image: ', i + 1, ': ', inputs[i]);
        console.log(
            '\t Flipped and inverted image: ',
            ': ',
            flipAndInvertImage(inputs[i]),
        );
        console.log('-'.repeat(100));
    }
}

main();
