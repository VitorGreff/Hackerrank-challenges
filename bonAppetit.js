function bonAppetit(bill, k, b) {
    // Write your code here
    // k-> what ana havent eat
    // b-> what ana paid for

    let total = 0
    for (let i in bill) {
        if (i != k) {
            total += bill[i]
        }
    }
    total /= 2
    console.log(total)

    if (total === b) {
        return `Bon Appetit`
    }
    else {
        return b - total
    }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12))
console.log(bonAppetit([3, 10, 2, 9], 1, 7))
