function showRating(rating) {
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratings += "*";
        if (i !== Math.floor(rating) - 1) {
            ratings += " ";
        }
    }
    if (!Number.isInteger(rating)) {
        ratings += " .";
    }
    return ratings;
}

console.log(showRating(4.5))

// Directions for problem above

// initialise an empty string

// loop through the rounded down rating

    // add a star for every iteration 

    // if its not the last iteration add a space

// if the number is not an integer

    // add a full stop

// return it