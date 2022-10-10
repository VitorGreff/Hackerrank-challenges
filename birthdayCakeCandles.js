function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest = 0
    //sort evaluates STRINGS! this could mean problems if we want to order a numeric sequence
    //const array = candles.sort()

    //sort can recognize a function as a parameter
    // if a-b returns a value greater than 0, then a is bigger
    // if a-b returns a value smaller than 0, then a is smaller
    // if a-b returns a value equal to 0, then a and b have the exact same values
    candles.sort(function (a, b) {
        return a - b;
    });

    const len = candles.length - 1

    for (let i = len; i >= 0; i--) {

        if (i === len) {
            tallest += 1
        }
        else {
            if (candles[i] === candles[len]) {
                tallest += 1
            }
        }

    } return tallest
}

let candles = [1000, 1000, 1000, 1000, 999]

console.log(birthdayCakeCandles(candles))
