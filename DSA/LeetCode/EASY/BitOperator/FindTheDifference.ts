function extraCharacterIndex(str1: string, str2: string): number {
    let index = 0;
    let res = 0;

    const s1Length = str1.length;
    const s2Length = str2.length;

    for (let i = 0; i < s1Length; i++) {
        res ^= str1[i].charCodeAt(0);
    }

    for (let i = 0; i < s2Length; i++) {
        res ^= str2[i].charCodeAt(0);
    }

    if (s1Length > s2Length) {
        index = str1.indexOf(String.fromCharCode(res));
        return index;
    } else {
        index = str1.indexOf(String.fromCharCode(res));
        return index;
    }
}

function main() {
    let str1 = ['wxyz', 'cbda', 'jlkmn', 'courae', 'hello'];
    let str2 = ['zwxgy', 'abc', 'klmn', 'couearg', 'helo'];

    for (let i = 0; i < str1.length; i++) {
        console.log(
            i +
                1 +
                '.\tString 1 = ' +
                str1[i] +
                '\n\t' +
                'String 2 = ' +
                str2[i],
        );
        console.log(
            '\n\tThe extra is at index:',
            extraCharacterIndex(str1[i], str2[i]),
        );
        console.log('-'.repeat(98));
    }
}

main();
