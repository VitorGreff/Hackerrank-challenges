function getTotalX(a, b) {
    // Write your code here
    let comparator = 1
    let ret = 0
    while (comparator <= 100) {
        if (checking(comparator, a, b)) {
            ret++
        }
        comparator++
    }
    return ret
}

function checking(element, a, b) {
    for (let i = 0; i < a.length; i++) {
        if (element % a[i] != 0) {
            return false
        }
    }
    for (let j = 0; j < b.length; j++) {
        if (b[j] % element != 0) {
            return false
        }
    }
    return true
}

let a = [2, 6]
let b = [24, 36]
console.log(getTotalX(a, b))

