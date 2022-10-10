function diagonalDifference(arr) {
    // Write your code here
    let d1 = 0
    let d2 = 0
    let tam = arr.length
    for(let i = 0; i<tam; i++){
        d1 = d1 + arr[i][i]
        d2 = d2 + arr[i][tam-1-i]
        console.log(arr[i][tam-1-i])
    }
    // diagonal princpal -> 00 11 22 33
    // diagonal secundaria -> 03 12 21 30
    console.log("D1: ",d1)
    console.log("D2: ",d2)
    let res = d1 - d2
    return Math.abs(res)

}

let arr = [
    [-1, 1, -7, -8],
    [-10, -8, -5, -2],
    [0, 9, 7, -1],
    [4, 4, -2, 1]
]

console.log(diagonalDifference(arr))