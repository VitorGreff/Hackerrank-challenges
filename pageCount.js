function pageCount(n, p) {
    const left = Math.floor(p/2)
    if(n%2===0) n++
    const right = Math.floor((n - p)/2)
    return Math.min(right,left)
}

console.log(pageCount(5, 4))