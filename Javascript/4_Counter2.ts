type Counter = {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
};
function createCounter(init: number): Counter {
    let original = init;
    return {
        increment: () => {
            original += 1;
            return original;
        },

        decrement: (): number => {
            original -= 1;
            return original;
        },

        reset: (): number => {
            original = init;
            return original;
        },
    };
}

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
