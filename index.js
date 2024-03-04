function newSolution(A){
    A.sort().reverse()
    console.log({A});


    let max_num = A[0];
    let min_num = A[n-1];
    let missing_num = -1

    for (let i = max_num -1; i >= min_num +1; i--){
        console.log({max_num});
        console.log({min_num});
        let found = false;

        for (let j = 0; j < n; j++){
            if (A[j] == i){
                console.log(A[i]);
                found = true;
                break;
            }
        }
        if (!found){
            missing_num = i;
            break;
        }
    }

    

    return missing_num;

}

let A = [2,3,7,5,9]
let n = A.length;
let missing_num = newSolution(A)

if (missing_num == -1) {
    console.log(-1);
} else {


console.log(missing_num); 
}