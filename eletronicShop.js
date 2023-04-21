function getMoneySpent(keyboards, drives, b) {
    let max = 0
    for(let i = 0; i < keyboards.length; i++){
        for(let j = 0; j < drives.length; j++){
            let sum = keyboards[i] + drives[j]
            if( sum > max && sum <= b){
                max = sum    
            }
        }
    }
    if(max == 0){ 
        return -1
    }
    
    return max
}

const b = 5
const keyboards= [5]
const drives = [4]
console.log(getMoneySpent( keyboards, drives, b))