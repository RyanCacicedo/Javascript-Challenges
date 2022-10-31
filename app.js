//filter out falsy values
function filterOutFalsy(arr) {
    return arr.filter(elem => !!elem === true)
}

console.log(filterOutFalsy([``, NaN, 500, null, false, 0]))

//convert to Boolean
function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean([``, NaN, false, null, false, 0]))