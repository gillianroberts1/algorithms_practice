/* 
1. subtract current position from end position
2. divide answer by distance required 
3. if the reaminder is 0



*/



// function solution(X,Y,D){
//     let NoOfMoves = 0
//     let currentPosition = X 
    
//     do {
//        currentPosition+= D
//        NoOfMoves+= 1 
//     } while (currentPosition < Y );

//     return NoOfMoves
// }

// console.log(solution(10, 85, 30));
 


function otherSolution(X, Y, D){
    if((Y - X) % D === 0){
        
        return (Y - X) / D
    }

    return Math.floor((Y - X) / D + 1)
}

console.log(otherSolution(10, 85, 30));
