function countingValleys(steps, path) {
    // Write your code here
    let level = 0;
    let arr = [];
    for (let i = 0; i < steps; i++) {
        if (path.charAt(i) === 'D') {
            level--;
            arr.push(level);
        }
        else {
            level++;
            arr.push(level);
        }
        console.log(level)
    }
    return arr.reduce((acc, elemento, index) => {
        if (elemento < 0 && (index === 0 || arr[index - 1] >= 0)) {
            acc++;
        }
        return acc;
    }, 0);
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));

