function beautifulDays(i, j, k) {
    // Write your code here
    let counter = 0
    for (i; i <= j; i++) {
        if((i - reverse(i))%k===0){
            counter++
        }
    }
    return counter

}

const reverse = x => {
    // esse split joga cada elemento em um index do array
    const arr = x.toString().split('')
    let reverse = []
    for (let j = arr.length-1; j >= 0; j--) {
        reverse.push(arr[j])
    }
    // join faz exatamente o oposto do split nesse caso
    let ret = parseInt(reverse.join(''))
    return ret
}

console.log(beautifulDays(20, 23, 6))