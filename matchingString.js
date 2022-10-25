const matchingString = (arr, query) => {
    let ret = []
    while (ret.length < query.length) {
        ret.push(0)
    }
    for (let i in query) {
        for (let j in arr) {
            if (query[i] === arr[j]) {
                ret[i] = ret[i] + 1
            }
        }
    } return ret
}

console.log(matchingString(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']))
console.log(matchingString(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh']))