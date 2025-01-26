type Counter = {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
};
function createCounter(init: number): Counter {
    let original = init;
    return {
        increment: () => {
            original += 2;
            return original;
        },

        decrement: (): number => {
            original -= 2;
            return original;
        },

        reset: (): number => {
            original = init;
            return original;
        },
    };
}

function createCounterBetter(init: number): Counter {
    let n = init;
    return {
        increment: () => ++n,
        decrement: () => --n,
        reset: () => (n = init),
    };
}

const counter = createCounter(6);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
