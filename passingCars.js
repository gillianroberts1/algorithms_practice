/*
e e e e e =>
   <= w w w w w 

1 = East
0 = West

Edge conditions = if passig cars > 1,000,000,000, return -1

Steps
1. iterate through passing cars
2. keep count of cars travelling East
3. when meeting car travelling West increment passingCars variable
   by passingCars += countOfCarsTarvelling East


*/
function solution(A){

    let carsTravellingEast = 0
    let passingCars = 0

    for(let i = 0; i < A.length; i++){
        if(passingCars > 1000000000) return -1

        if(A[i] == 0) carsTravellingEast ++;
        if(A[i] == 1) passingCars += carsTravellingEast;
        console.log({carsTravellingEast});
        console.log({passingCars});
    }
    return passingCars;

}

const A = solution([0,1,0,1,1])