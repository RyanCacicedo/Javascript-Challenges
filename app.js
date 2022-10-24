function falsyOrTruthy(elem1, elem2) {
    return (!elem1) ? elem1 : elem2;
}

console.log(falsyOrTruthy(0,5))


function arrLength(arr) {
    return arr.length
}

console.log(arrLength([1, 2, 3, 4]))


function arrLength(arr) {
    return arr[arr.length - 1];
}

console.log(arrLength([1, 2, 3, 4, 50]))


function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(arrSum([2, 2, 2]))


function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; ++i) {
        sum = sum + i;
    }
    return sum;
}

console.log(progressiveSum([4]))