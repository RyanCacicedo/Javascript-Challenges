function calcTime(seconds) {
   let timerMinutes = Math.floor(seconds / 60)
   let timerSeconds = seconds % 60;

   if (timerMinutes.toString().length === 1){
    timerMinutes = `0` + timerMinutes
   }

   return timerMinutes + `:` +timerSeconds
}

console.log(calcTime([70]))


function getMax(arr) {
   let max = arr[0]
    for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > max) {
        max = arr[i];
    }
   }
   return max;
}
console.log(getMax([10, -200, -300]))

// incrementing for Loop
function reverseString(str) {
    let reversedString = ``
    for (let i = 0; i < str.length; ++i) {
   reversedString = str[i] + reversedString
   }
   return reversedString;
}
console.log(reverseString(`abc`))

//decrementing for Loop
function reverseString(str) {
    let reversedString = ``
    for (let i = str.length - 1; i >= 0; --i) {
   reversedString += str[i]
   }
   return reversedString;
}
console.log(reverseString(`abc`))

//Array reverse property
function reverseString(str) {
    return str.split(``).reverse().join(``);
}

console.log(reverseString(`Ryan`))