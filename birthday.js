function birthday(s, d, m) {
    let counter = 0
    for (let i = 0; i < s.length; i++) {
        let segment = s.slice(i, i+m)
        if(sum(segment) === d) counter++
    }
    return counter
}
const sum = (a) => a.reduce((acc, curr) => acc + curr, 0)

// the segment must have a length of m and a sum of d
let s = [2, 2, 1, 3, 2]
let d = 4
let m = 2

console.log(birthday(s, d, m))