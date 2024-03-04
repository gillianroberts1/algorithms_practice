
/* 
A = [2,3,5,2,3,7,5]

1. sort array
    sortedArray = [ 2, 2, 3, 3, 5, 5, 7]

2. create empty var to store any dublicates
    Dublicates = []
3. set pointer i to 0
4. set pointer N to 1
4. loop through sorted array
4. compare i to N
5. if i=j value then remove both i&j
6. if i !=N then return N
*/

// dublicates = []
// sortedArray = []

// function solution(A){

    
//     A.sort()
//     console.log(A);

//     for(let i = 0; i < A.length; i++ ){
//         console.log(`~~~~~ OUTER LOOP ~~~~~~~ i === ${i}`);

//         for(let j=i+1; j < A.length; j++){
//             console.log(` INNER LOOP ~~~~~ j === ${j}`);

//             if(i === j){
//                 A.pop(0,2)

//             } 
//             }
            
//         }
//         return A;
//     }
    


// const A = [2,3,5,2,3,7,5]
// const result = solution(A)
// console.log("Single Element:", result)

// var n = A.length;
// var result = "";

// function oddOccurrenceInArray(){
//     for (i = 0; i < n; i++){


//         var j;
//         for (j = 0; j < n; j++){


//          if (i != j && A[i] == A[j]){
//             result = A[i]
//             break;
//         }
//     }

//         if (j == n)
//         return A[i]
//     }
//     return result;
// }
// console.log(oddOccurrenceInArray());


function oddOccurrenceInArray(array) {
    const sortedArray = array.sort(); 
    let currentCount = 1; // Start counting from the first occurrence
    let oddNum 
  
    for (let i = 0; i < sortedArray.length; i++) {
        const currentNum = sortedArray[i]
        const nextNum = sortedArray[i + 1]

      // If the next element is the same, increment the count
      if (currentNum === nextNum) {
        currentCount++;
        console.log({currentNum});
        console.log({nextNum});
        console.log({currentCount});

      } else {
        // If the count is odd, return the current number
        if (currentCount % 2 !== 0) {
             console.log('current count is odd', currentCount);
          oddNum = currentNum;
        }
        // Reset count for the next unique number
        currentCount = 1;
      }
    }
    // In case the last number is the one that occurs an odd number of times
    return oddNum; // or you might want to throw an error or return a specific value indicating no odd occurrence was found
  }

  A = [2,2,5,3,5,3, 7, 7, 4]

  console.log(oddOccurrenceInArray(A));
  