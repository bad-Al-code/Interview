var requestLogger = function (timeLimit) {
    this.requests = {};
    this.limit = timeLimit;
};

requestLogger.prototype.messageRequestDecision = function (timestamp, request) {
    if (
        !this.requests[request] ||
        timestamp - this.requests[request] >= this.limit
    ) {
        this.requests[request] = timestamp;

        return true;
    } else {
        return false;
    }
};

function main() {
    let newRequests = new requestLogger(10000);

    let times = [10, 50, 60, 70, 105, 1, -22, 202, 2131],
        messages = [
            'good morning',
            'hello world',
            'good morning',
            'good morning',
            'hello world',
            ,
            'hello world',
            'good morning',
            'good morning',
            'hello world',
        ];

    for (let i = 0; i < messages.length; i++) {
        console.log(
            i + 1 + `.\t Time, Message: {${times[i]}, '${messages[i]}'}`,
        );
        console.log(
            '\t Message request decision: ',
            newRequests.messageRequestDecision(times[i], messages[i]),
        );
        console.log('-'.repeat(100));
    }
}

main();
