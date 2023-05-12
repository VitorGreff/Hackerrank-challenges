function sockMerchant(n, arr) {
    // Write your code here
    const aux = unique(arr);
    let count = 0;
    let ret = 0;

    for (let i = 0; i < aux.length; i++) {
        for (let j = 0; j < n; j++) {
            if (aux[i] === arr[j]) {
                count++;
            }
        }
        ret += Math.floor(count / 2);
        count = 0;
    }
    return ret;
}

const unique = (arr) => Array.from(new Set(arr));


const n = 9;
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(n, arr));