function oppositeBoolean(bool) {
  return !bool;
}

console.log(oppositeBoolean(false));

function isNotZero(num) {
  return num !== 0;
}

console.log(isNotZero(5));

function calcRemainder(num1, num2) {
  return num1 % num2;
}

console.log(calcRemainder(7,8));

function isOdd(num) {
  return num % 2 !== 0
}

console.log(isOdd(7));

function isEven(num) {
 if (num % 2 === 0){
     return 1
    }
    return -1
}

console.log(isEven(12));
//Shorter Version

function isEvenn(num) {
 return num % 2 === 0 ? 1 : -1
}
console.log(isEvenn(3))