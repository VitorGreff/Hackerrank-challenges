const calculateKaprekar = (fHalf = 0, sHalf = 0) => {
    let intF = parseInt(fHalf) || 0
    let intS = parseInt(sHalf)
    return intF + intS
}

function kaprekarNumbers(p, q) {
    // Write your code here
    let str = ''
    let fHalf
    let sHalf
    let ret = []

    for (let i = p; i <= q; i++) {
        str = (i ** 2).toString()
        fHalf = str.slice(0, Math.floor(str.length / 2))
        sHalf = str.slice(Math.floor(str.length / 2))

        if (calculateKaprekar(fHalf, sHalf) === i) {
            ret.push(i)
        }

    }

    if (ret.length === 0) {
        console.log(`INVALID RANGE`)
        return 0
    }

    ret = ret.join(' ')
    console.log(ret)
}

kaprekarNumbers(25, 100)
kaprekarNumbers(400, 700)
kaprekarNumbers(1, 100)