"use strict";

let mixedArr = ['a', 'B', 'C', 'd', 'E', 'f'];
let lowerArr = ['a', 'b', 'c', 'd', 'e', 'f'];
let upperArr = ['A', 'B', 'C', 'D', 'E', 'F'];
let mixedArr2 = ['A', 'B', 'c', 'd', 'e', 'F'];

console.log('___________Using myEvery()__________');
function myEvery(theArray, theTest) {
    for (let i = 0; i < theArray.length; i++) {
        if (!theTest(theArray[i])) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}

myEvery(mixedArr, x => x === x.toUpperCase());
myEvery(lowerArr, x => x === x.toUpperCase());
myEvery(upperArr, x => x === x.toUpperCase());

myEvery(mixedArr, x => x === x.toLowerCase());
myEvery(lowerArr, x => x === x.toLowerCase());
myEvery(upperArr, x => x === x.toLowerCase());

console.log('__________Using build in array.every()__________');
let mybool;
mybool = mixedArr.every(x => x === x.toUpperCase());
console.log(mybool);
mybool = lowerArr.every(x => x === x.toUpperCase());
console.log(mybool);
mybool = upperArr.every(x => x === x.toUpperCase());
console.log(mybool);

mybool = mixedArr.every(x => x === x.toLowerCase());
console.log(mybool);
mybool = lowerArr.every(x => x === x.toLowerCase());
console.log(mybool);
mybool = upperArr.every(x => x === x.toLowerCase());
console.log(mybool);

console.log('__________Using mySome()__________');
function mySome(theArray, theTest) {
    for (let i = 0; i < theArray.length; i++) {
        if (theTest(theArray[i])) {
            return true;
        }
    }
    return false;
}

mybool = mySome(mixedArr, theChar => theChar === theChar.toUpperCase());
console.log(mybool);
mybool = mySome(lowerArr, theChar => theChar === theChar.toUpperCase());
console.log(mybool);
mybool = mySome(upperArr, theChar => theChar === theChar.toUpperCase());
console.log(mybool);

mybool = mySome(mixedArr, theChar => theChar === theChar.toLowerCase());
console.log(mybool);
mybool = mySome(lowerArr, theChar => theChar === theChar.toLowerCase());
console.log(mybool);
mybool = mySome(upperArr, theChar => theChar === theChar.toLowerCase());
console.log(mybool);


console.log('__________Using built in mySome()__________');
mybool = mixedArr.some(theChar => theChar === theChar.toUpperCase());
console.log(mybool);
mybool = lowerArr.some(theChar => theChar === theChar.toUpperCase());
console.log(mybool);
mybool = upperArr.some(theChar => theChar === theChar.toUpperCase());
console.log(mybool);

mybool = mixedArr.some(theChar => theChar === theChar.toLowerCase());
console.log(mybool);
mybool = lowerArr.some(theChar => theChar === theChar.toLowerCase());
console.log(mybool);
mybool = upperArr.some(theChar => theChar === theChar.toLowerCase());
console.log(mybool);

console.log('__________Using my onlyIf()__________');
function onlyIf(theArray, theTest, theAction) {
    for (let i = 0; i < theArray.length; i++) {
        if (theTest(theArray[i])) {
            theAction(theArray, i);
        }
    }
}

console.log(mixedArr);
onlyIf(mixedArr, x => x !== x.toUpperCase(), (arr, number) => { arr[number] = number; console.log(arr[number]); });
onlyIf(lowerArr, x => x === x.toLowerCase() && x !== 'b', (arr, number) => { arr[number] = arr[number].toUpperCase() + '!!!'; console.log(arr); });


console.log('__________Using built in filter() and forEach()____________');

let newArr = mixedArr2.filter(x => { if (x !== x.toUpperCase()) { return x; } });
console.log(newArr);
newArr.forEach((item, x, arr) => { arr[x] = arr[x].toUpperCase(); console.log(arr[x]); });

console.log('___________Here comes the Closure!__________');

function multiply(numA, numB) {
    return numA * numB;
}
let x = multiply(4, 5);
let y = multiply(2, 12);
let z = multiply(6, 8);
let a = multiply(9, 7);
console.log(x);
console.log(y);
console.log(z);
console.log(a);

function getMultiplier() {
    return function (numA, numB) { return numA * numB; };
}
let results = getMultiplier();
console.log(results);
let product = results(2, 3);
console.log(product);
let product2 = results(7, 8);
console.log(product2);

function getMultiplesOf(numC) {
    return function (numD) { return numC * numD; };
}
let MultiplesOfSix = getMultiplesOf(6);
console.log(MultiplesOfSix);
let sixTimesTwo = MultiplesOfSix(2);
console.log(sixTimesTwo);
let sixTimesEight = MultiplesOfSix(8);
console.log(sixTimesEight);
let multiplesOfNine = getMultiplesOf(9);
console.log(multiplesOfNine);
let nineTimesSeven = multiplesOfNine(7);
console.log(nineTimesSeven);
let nineTimesThree = multiplesOfNine(3);
console.log(nineTimesThree);