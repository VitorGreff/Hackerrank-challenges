function miniMaxSum(arr) {
    // Write your code here
    // counter will serve to access the array 
    const counter = arr.length-1
    let sum_min = 0
    let sum_max = 0
    arr = arr.sort(function (a, b) {
        return a - b;
        });

    //0 --> n-1 (all except the last value)
    for (let i = 0; i < counter; i++) {
        sum_min += arr[i]
    }

    //n --> 1 (all except the first value)
    for (let i = counter; i > 0; i--) {
        sum_max += arr[i]
    }

    console.log(sum_min, sum_max)
}

const array = [1, 2, 3, 4, 5]
miniMaxSum(array)

// min.push(arr.reduce((a, b) => Math.min(a, b), Infinity))
// max.push(arr.reduce((a, b) => Math.max(a, b), -Infinity))