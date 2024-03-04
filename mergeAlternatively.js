/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}

 1. word1.length = 0
 2. word2.length = 0
 */
 var mergeAlternately = function(word1, word2) {
    let merged = ""
    
    const longestWord = word1.length > word2.length ? word1 : word2;
    
    // console.log({longestWord})
    
    for(i = 0; i < longestWord.length; i++){
        
        const word1Letter = word1[i] ?? ""
        const word2Letter = word2[i] ?? ""

        merged = merged + word1Letter + word2Letter;
        // console.log({merged})        

    }
    return merged;
    
}