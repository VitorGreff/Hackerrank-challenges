const julianLeap = (year) => year % 4 === 0
const gregorianLeap = (year) => (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)

function dayOfProgrammer(year) {
    // Write your code here
    let sum = 0
    let obj = {
        january: 31,
        february: 28,
        march: 31,
        april: 30,
        may: 31,
        june: 30,
        july: 31,
        august: 31,
    }

    //in 1918's Russia, february started in the 14th day
    if (year === 1918) {
        return `26.09.${year}`
    }

    else if (year >= 1700 && year <= 1917) {
        if (julianLeap(year)) obj.february = 29
    }

    else if (year >= 1919) {
        if (gregorianLeap(year)) obj.february = 29
    }


    sum = Object.values(obj).reduce((acc, value) => acc + value)
    return `${256 - sum}.09.${year}`
}

console.log(dayOfProgrammer(2500))


