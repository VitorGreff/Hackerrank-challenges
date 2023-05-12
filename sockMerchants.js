function sockMerchant(n, arr) {
    // Write your code here
    const sorted = arr.sort((a, b) => a - b);
    let count = 0;
    console.log(sorted);
    for (let i = 0; i < n; i++) {
        if (sorted[i] === sorted[i + 1]) {
            count++;
            i += 1;
        }
    }
    return count;
}




const n = 9;
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(n, arr));