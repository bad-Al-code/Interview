//TODO: Implement stack

function insertAtBottom(stack: number[], item: number) {
    if (stack.isEmpty() === true) {
        stack.push(item);
    } else {
        let temp = stack.pop();
        insertAtBottom(stack, item);
        stack.push(temp);
    }
}
function reverse(a: number[]): number[] {
    if (a.isEmpty() === false) {
        let temp = a.pop();
        reverse(a);
        insertAtBottom(a, temp);
    }
}
