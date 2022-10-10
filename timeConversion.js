function timeConversion(s) {
    // Write your code here
    let first_two
    let res = ''

    //PM time conversion
    if(s.charAt(8) === 'P'){
        if(s.substring(0,2) === '12'){
            res = s.substring(0,8)
        }
        else{
            //separates a string by 2 indexes
              first_two = s.substring(0,2)
              //calculates the difference between the two system metrics
              first_two = parseInt(first_two) + 12
              first_two = first_two.toString()
              //concatenate both of the strings, the new value of the hours and the rest of it
              res = res.concat(first_two, s.substring(2,8))     
        }  
    } 

    //AM time conversion
    else{
        if(s.substring(0,2) === '12'){
            res = s.substring(0,8)
            res = res.replace('12', '00')
        }

        else res = s.substring(0,8)
    }
    
    return res
}

const s1 = '07:05:45PM'
const s2 = '07:05:45AM'
const s3 = '12:00:00PM'
const s4 = '00:05:45PM'

console.log('s1 : ',timeConversion(s1))
console.log('s2 : ',timeConversion(s2))
console.log('s3 : ',timeConversion(s3))
console.log('s4 : ',timeConversion(s4))
