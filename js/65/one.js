"use strict";
let x = 5;
const y = 2;
console.log(x + y);
x = 1;
console.log(x + y);
let num = 5;
let stringnum = "8";
let word = "Hello";
/*console.log(num == stringnum);*/
console.log(num === stringnum);
console.log(num !== stringnum);
let newNum = word + num;
console.log(newNum);
let nextNum = word - num;
console.log(nextNum);
if (isNaN(nextNum)) {
    console.log("Oooops...");
}
