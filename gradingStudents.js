function gradingStudents(grades) {
    // Write your code here
    let fgrades = []

    for (let i = 0; i < grades.length; i++) {
        //38 is the smaller grade that can be rounded
        if (grades[i] >= 38) {
            //this condition returns the next multiple of 5 and calculates its difference to the actual grade
            if ((Math.ceil(grades[i] / 5) * 5 - grades[i]) < 3) {
                fgrades[i] = Math.ceil(grades[i] / 5) * 5
            }
            else fgrades[i] = Math.ceil(grades[i])
        }
        else fgrades[i] = grades[i]
    }

    return fgrades
}

let grades = [73, 67, 38, 33]

console.log(gradingStudents(grades))