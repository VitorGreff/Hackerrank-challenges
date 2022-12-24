const separateDigits = (n) => {
    const stringN = n.toString()
    const digits = []
    for (let i in stringN) {
        digits.push(parseInt(stringN[i]))
    }
    return digits
}

function findDigits(n) {
    // Write your code here
    let ret = 0
    const arr = separateDigits(n)
    for (let i in arr) {
        if (n % arr[i] === 0) ret++
    }
    return ret
}


console.log(findDigits(111))