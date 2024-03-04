// /* shift to right

// 1 2 3 4 5   K
// 5 1 2 3 4 = 1
//   i
// 4 5 1 2 3 = 2
//     i
// 3 4 5 1 2 = 3
//       i
// 5 4 3 2 1 = 4
//         i

// 1. set pointer i to 0
// 2. loop through until pointer i = K
// 3. remove elements from index of last element (last element of the array) 
// 4. store removed item
// 5. return removed elemnents to start of array (unshift)

// */

// // const A = [1,2,3,4,5];
// // const K = 2;
// // function solution(A, K){
    
// //     for(let i = 0; i < K; i++){
// //         console.log(`loop is at: ${i}`)

// //         const removedItem = A.splice(A.length -1, 1);
// //         console.log(`spliced ${A}`);
// //         A.unshift(...removedItem);
// //         console.log(` removedItem ${removedItem}`);


// //     }

// // }
// // solution(A, K)
// // console.log(`The new array shifted right ${K} times is:`, A)



// /* shift to left by K

// 1 2 3 4 5   K
// i
// 2 3 4 5 1 = 1
//         i
// 3 4 5 1 2 = 2
//       i
// 4 5 1 2 3 = 3
//     i
// 5 1 2 3 4 = 4
//   i

// 1. set pointer i to 0
// 2. loop through array until pointer i = K
// 3. splice at K from index 0 but not including 1 (start of array)
// 4. push removed item/s to end of array (push)
// 5. return new array  
// */

const A = [1,2,3,4,5];
const K = 2;
function solution(A, K){
    
    for(let i = 0; i < K; i++){
        console.log(`loop is at: ${i}`)

        const removedItem = A.splice(0, 1);
        console.log(`spliced item: ${A}`)
        A.push(...removedItem);
        console.log(`the removed item is: ${removedItem}`)


    }

}
solution(A, K)
console.log(`The new array shifted left ${K} times is:`, A)



