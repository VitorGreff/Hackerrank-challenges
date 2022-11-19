function plusMinus(arr) {
    // Write your code here
    const len = arr.length
    let positive = []
    let negative = []
    let zero = []

    for (let i in arr) {
        if (arr[i] > 0) {
            positive.push(arr[i])
        }

        else if (arr[i] < 0) {
            negative.push(arr[i])
        }

        else if (arr[i] == 0) zero.push(arr[i])
    }

    const asp = positive.length / len
    const asn = negative.length / len
    const asz = zero.length / len

    console.log(`${asp.toFixed(6)}\n${asn.toFixed(6)}\n${asz.toFixed(6)}`)
}


let arr = [1, 1, 0, -1, -1]
plusMinus(arr)