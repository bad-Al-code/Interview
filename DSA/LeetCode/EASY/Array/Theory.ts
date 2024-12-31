let myArray: number[] = [1, 2, 3];
let mySecondArray: number[] = [];

console.log(myArray);

mySecondArray.push(1);
mySecondArray.push(5);
mySecondArray.push(5);

console.log(mySecondArray);

mySecondArray.pop();

console.log(mySecondArray);

console.log(`First element: ${mySecondArray.shift()}`);

mySecondArray.unshift(123);

console.log(mySecondArray);

mySecondArray.reverse();

console.log(mySecondArray);

mySecondArray.splice(2, 0, 123213123);

console.log(mySecondArray);

mySecondArray.splice(2, 3);
console.log(mySecondArray);

let myThirdArrray = mySecondArray.slice(2);
console.log(myThirdArrray);

let myFourthArray = myArray.concat(myThirdArrray);
console.log(myFourthArray);

for (let element of myFourthArray) {
    console.log(element);
}
