const dash = (arr) => {
    const len = arr.length / 2
    for (let i = 0; i < len; i++) {
        arr[i][1] = '-'
    }
}

function countSort(arr) {
    // Write your code here
    let ret = []
    dash(arr)
    arr.sort((pos, pos2) => {
        return pos[0] - pos2[0]
    })

    for (let i in arr) {
        ret.push(arr[i][1])
    }
    
    console.log(ret.join(' '));

}

let arr = [[0, 'a'], [1, 'b'], [0, 'c'], [1, 'd']]
countSort(arr)


