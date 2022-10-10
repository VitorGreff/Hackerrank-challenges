function plusMinus(arr) {
    // Write your code here
    const len = arr.length
    let positive = []
    let negative = []
    let zero = []
    
    for(let i=0; i<len; i++){
        if(arr[i]>0){
            positive.push(arr[i])
        }
        
        if(arr[i]<0){
            negative.push(arr[i])
        }
        
        if(arr[i] == 0) zero.push(arr[i])
    }
    
    //.length returns a string that represents the actual number
    let len_pos = positive.length
    let len_neg = negative.length
    let len_zer = zero.length
    
    const asp = len_pos/len
    const asn = len_neg/len
    const asz = len_zer/len
    
    console.log(asp.toFixed(5))
    console.log(asn.toFixed(5))
    console.log(asz.toFixed(5))
}


let arr = [-4, 3, -9, 0, 4 ,1]
plusMinus(arr)