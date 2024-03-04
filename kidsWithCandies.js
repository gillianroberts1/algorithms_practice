/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}

candies 2 3 5 1 3 
extraCandies 3
minCandies = 1
maxCandies = 5

 
 5 3 5 1 3 => true
 i 

 2 6 5 1 3 => true
   i

 2 3 8 1 3 => true
     i

 2 3 5 4 3 => false
       i

 2 3 5 4 6 => true
         i

 t t t f t => result



 1. iniliase new varaible = newCandies
 2. find maxCandies
 2. loop though candies
 3. add extraCandie to each kid
 3. if newCandie (i + extraCandie) is greater that maxCandie return true for that element
 4. otherwise return false
 
 */
 var kidsWithCandies = function(candies, extraCandies) {
    
    const result = []
    const maxCandies = Math.max(...candies)
    console.log("max",maxCandies)


    for(let i = 0; i < candies.length; i++){
        const newCandiesTotal = candies[i] += extraCandies
        // console.log(newCandiesTotal)   

        newCandiesTotal >= maxCandies ? result.push(true) : result.push(false)

    }
    return result
}