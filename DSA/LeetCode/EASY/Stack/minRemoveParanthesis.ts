function minRemoveParentheses(s: string): string {
    const stack: Array<[string, number]> = [];
    const sList: string[] = Array.from(s);

    for (let i = 0; i < s.length; i++) {
        let val = s[i];
        let top = stack.length - 1;

        if (stack.length > 0 && stack[top][0] === '(' && val === ')') {
            stack.pop();
        } else if (val === '(' || val === ')') {
            stack.push([val, i]);
        }
    }

    for (let p of stack) {
        sList[p[1]] = '';
    }

    let result = sList.join('');
    return result;
}

function main() {
    let inputs = [
        'ar)ab(abc)abd(',
        'a)rt)lm(ikgh)',
        'aq)xy())qf(a(ba)q)',
        '(aw))kk())(w(aa)(bv(wt)r)',
        '(qi)(kl)((y(yt))(r(q(g)s)',
    ];
    for (let i = 0; i < inputs.length; i++) {
        console.log(i + 1 + `. Input: "${inputs[i]}"`);
        console.log(
            `   Valid parentheses, after minimum removal: "${minRemoveParentheses(inputs[i])}"`,
        );
        console.log('-'.repeat(100));
    }
}

main();
