function utopianTree(n) {
    // Write your code here
    let i = 0
    let ret = 1
    while (i < n) {
        if (i % 2 === 0) {
            ret *= 2
        }
        else ret += 1
        i++
    }
    return ret
}

console.log(utopianTree(5))
