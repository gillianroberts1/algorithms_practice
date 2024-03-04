/*

Next Num positive number in array

A = [1,3,6,2,4]  //7
B = [-1,-3]  //1
*/

function solution(A){
    A.sort(); 
    
    let lastNum = A[A.length -1]
    if (lastNum <= 0){
        nextNum = 1
    } else {
    nextNum = lastNum +=1
    }
return nextNum
}
// console.log(solution([-1, -2]))
// console.log(solution([1,2,3,7,5,4]))


function otherSolution(A) {
    A.sort().reverse()
    const biggestNum = A[0]

    if(biggestNum < 0){
        return 1
    }
    return biggestNum + 1
}
// console.log(otherSolution([-1, -2]));
// console.log(otherSolution([-1, 5]));
// console.log(otherSolution([1, 3, 6, 4, 1, 2]))


// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// if nextNum is not currentNum + 1, missingNum is currentNum + 1
// if missingNum is undefined, missingNum is biggestNum + 1
// if biggestNum is < 0, missingNum is 1

function newSolution(A){
    A.sort().reverse()
    console.log({A});

    for(let element in A){
        let prevNum;
        let currentNum;
        if(prevNum != currentNum +1)
        missingNum = currentNum +1
    console.log(missingNum);
    }

    

    return
}
// console.log(newSolution([9,7,8,6,4])); 

// console.log(newSolution([6,2,3,5,1])); 
// console.log(newSolution([-1,-2]));
// console.log(newSolution([1,2,3,5,6,4]));