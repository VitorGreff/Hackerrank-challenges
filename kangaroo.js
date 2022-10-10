function kangaroo(x1, v1, x2, v2) {
    //Write your code here
    //We shall use the concept of relative distance
    //The difference between the greater X and both speed values must be multiples 
    //(X1 - X2) % (V1 - V2) == 0
    //note that the fist position MUST be the greater one

    //these 2 ifs serves to check if the smaller value between x1 and x2
    //has a speed lower than the greater one
    //if that so, its impossible to the smaller value to reach the greater one
    if (x1 > x2 && v1 >= v2) {
        return 'NO'
    }

    else if (x1 < x2 && v1 <= v2) {
        return 'NO'
    }


    else {
        if (x1 >= x2) {
            if ((x1 - x2) % (v1 - v2) === 0) return 'YES'
            else return 'NO'
        }

        else {
            if ((x2 - x1) % (v2 - v1) === 0) return 'YES'
            else return 'NO'
        }
    }
}

console.log(kangaroo(0, 3, 4, 2))
console.log(kangaroo(0, 2, 5, 3))
