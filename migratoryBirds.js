
function migratoryBirds(arr) {
    let obj = {}
    let max = 0
    let maxKey = 0
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }
    console.log(obj)

    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key]
            maxKey = key
        }
    }
    return maxKey
}


let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4] 
let arr2 = [1, 4, 4, 4, 5, 3]


console.log(migratoryBirds(arr))
