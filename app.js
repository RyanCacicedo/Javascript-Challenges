//Turn everything to zeroes

//For loop method
function convertToZeros(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; ++i) {
        newArr[i] = 0
    }
    return newArr
}
console.log(convertToZeros([1, 2, 3, 4, 5, 6]))

//Array fill method
function convertToZeros(arr) {
    return new Array(arr.length).fill(0)
}
console.log(convertToZeros([1, 2, 3, 4, 5, 6]))

//array.map method
function convertToZeros(arr) {
    return arr.map(elem => 0)
}
console.log(convertToZeros([1, 2, 3, 4, 5, 6]))

//filter out apples for method
function removeApples(arr) {
    let noApples = []
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== `Apple`) {
            noApples.push(arr[i]);
        }
    }
    return noApples
}
console.log(removeApples(['bananna', 'Apple', 'orange']))

//filter out apples array.filter method
function removeApples(arr) {
    return arr.filter(elem => elem !== `Apple`)
}

console.log(removeApples([`bananna`, `Apple`, "Orange"]))