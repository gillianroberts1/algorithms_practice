/*
x = finish line
i = seconds
position(K)            X
             0 1 2 3 4 5 6 7 8 
secs (A)   0   k
           1       k
           2   k
           3         k
           4     k
           5       k
           6           k
           7
           8



time complexity : O(N)
*/



function solution(X, A){
    let S = new Array(X);
    console.log({S});
    let remainingDistance = X;

    for(let i = 0; i < A.length; i++){
        let currentLeafPosition = A[i];
        console.log({currentLeafPosition});
        console.log({S});


        if(S[currentLeafPosition] != 1){
            S[currentLeafPosition] = 1;
            remainingDistance --;
            console.log({remainingDistance});
            console.log({S});

        }
        if(remainingDistance == 0) 
        return i;
        
    }
    return -1
console.log("frog cannot cross", -1)

}

const A = solution(5,[1,3,1,4,2,3,5,3])
const X = 5