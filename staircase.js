function staircase(n) {
    // Write your code here
    for (let i = n - 1; i >= 0; i--) {
        if (i == 0) {
            console.log('#'.repeat(n))
        }
        //when 'repeats' gets to 0, it leaves an empty char in front of the word
        //-1 is necessary as repeat leaves an empty char after it stops
        else console.log(' '.repeat(i - 1), '#'.repeat(n - i))
    }

}
//notice that, after the repetition of 'test', there is an empty space between 'test' and 'ending'
console.log("test".repeat(4), 'ending')
staircase(8)
