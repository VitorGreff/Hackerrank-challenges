function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let sum_apples = 0
    let sum_oranges = 0

    //verifying all the positions in apples array
    for(let pos_A in apples){
        //calculating the distance traveled by the apple
        let dist = a + apples[pos_A]
        if(dist>=s && dist<=t){
            sum_apples++
        }
    }

    //verifying all the positions in oranges array
    for(let pos_O in oranges){
        //calculating the distance traveled by the orange
        let dist2 = b + oranges[pos_O]
        if(dist2>=s && dist2<=t){
            sum_oranges++
        }
    }
    console.log(sum_apples)
    console.log(sum_oranges)
}

let apples = [2,3,-4]
let oranges = [3,-2,-4]
countApplesAndOranges(7,10,4,12,apples,oranges)