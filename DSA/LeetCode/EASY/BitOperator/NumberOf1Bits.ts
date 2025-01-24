function hammingWeight(n: number): number {
    if (n === 0) return 0;
    console.log('ToString: ', n.toString());
    console.log('Bianry: ', n.toString(2));
    console.log('remove 1: ', n.toString(2).split('1'));
    console.log('length: ', n.toString(2).split('1').length);
    console.log('result: ', n.toString(2).split('1').length - 1);

    return n.toString(2).split('1').length - 1;
}

console.log(hammingWeight(23));
