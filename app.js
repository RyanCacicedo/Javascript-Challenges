function areaOfTriangle(base, height) {
    return .5 * base * height
}

console.log(areaOfTriangle(3, 2))


function appendFrontend(string) {
    return string + `Frontend`
}

console.log(appendFrontend(`Orange`))


function sumGreaterThan100(num1, num2) {
    if (num1 + num2 > 100) {
        return true
    }
    return false
}

console.log(sumGreaterThan100(80,80))


function lessThanOrEqualToZero(number) {
   return number <= 0
}

console.log(lessThanOrEqualToZero(3))