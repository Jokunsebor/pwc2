//function
function addNum(a,b){
    return a + b
}
console.log(addNum(3,2))

//Division
function divNum(a,b){
    return a / b
}
console.log(divNum(3,2))

//Subtraction
function subNum(a,b){
    return a - b
}
console.log(subNum(3,2))

//Arrow Function

const squaredNum = (n) => {
    return n*n
}
console.log(squaredNum(4))

//Module
const numMod = (m) => {
    return m%2
}
console.log(numMod(11))

console.log('number is ${i}');

//jumb by numbers
const printTwo = (n) => {
    for (let i= 1; 1 < n; 1+=3) {
        console.log(i);
}
console.log(printTwo(20))

// convert string to array

let someword ='Admanu';
console.log(someword.split)

//
let someArray = ['a', 'b', 'c', 'd','e','f'];
console.log(someArray.reverse())


function stringToArray(str){
return str.split('').reverse().str.join('');

}console.log(stringToArray('joan'))

//
function isPalindrione(str){
let newString = str.split('').reverse().join('');
if (str === newString){
    return true
}else {
    return false
}
}
console.log(isPalindrione('level'))


//Int Palindrione

function intPalindrione(num) {
let numToString = num.toString();
return numToString === numToString.split('').reverse().join('') ? true : false;
} 
console.log(intPalindrione(11))