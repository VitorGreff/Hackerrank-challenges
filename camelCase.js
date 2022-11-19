function camelcase(s) {
    // Write your code here
    let count = 1
    for(let i of s){
        if(i === i.toUpperCase()){
            count ++
        }
    }
    return count
}

console.log(camelcase('testandoTesteNumeroUm'))