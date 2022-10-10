//d = sum m = length
function birthday(s, d, m) {
    // Write your code here
    let garbage = []
    let sample
    let ret = 0
    for (let i = 0; i < s.length; i++) {
        sample = s[i]
        for (let j = 0; j < s.length; j++) {
            if (sample + s[j] === d) {
                garbage = s.splice(j,1)
                console.log(s)
                //console.log(`Pair: ${sample} + ${s[j]} = ${sample+s[j]}`)
                ret++
            }
        }
    } console.log(ret)
}

let arr = [2, 2, 1, 3, 2]
birthday(arr, 4, 2)
