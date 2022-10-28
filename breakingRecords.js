function breakingRecords(scores) {
    // Write your code here
    let ret = [0, 0]
    let coutW = scores[0]
    let coutL = scores[0]
    for (let i in scores) {
        if (scores[i] > coutW) {
            ret[0] += 1
            coutW = scores[i]
        }
        else if (scores[i] < coutL) {
            ret[1] += 1
            coutL = scores[i]
        }
    }
    return ret
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
console.log(breakingRecords([3,4,21,36,10,28,35,5,25,42]))
