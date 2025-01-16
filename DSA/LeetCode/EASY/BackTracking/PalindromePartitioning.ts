function palindromeCheck(s: string, start: number, end: number): boolean {
    while(start <=end) {
        if(s[start] !== s[end]) return false;
        end--;
        start++;
    }

    return true;
}

function backtrack(start: number, s: string,  result: string[][], output:string[] ): void {

    if(start >= s.length) {
        result.push([...output]);
        return
    }
    for(let i=start; i<s.length; i++) {
        if(palindromeCheck(s, start, i)) {
            output.push(s.slice(start, i+1));
            backtrack(i+1, s, result, output);
            output.pop()!;
        }
    }
}
function partition(s: string): string[][] {
   const result: string[][] = [];
   const output: string[] = [];

   backtrack(0, s, result, output);
    return result;

};


