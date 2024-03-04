/**
 * @param {string} s
 * @return {string}

  s = h    e  l  l  o
  index = s[0]  [1][2][3][4]

value s[index]
   
 initialise vowels = [a,e,i,o,u]

 1. loop through string (i)
 2. if charAt i in string === vowel in array then push to new array
 3. second loop through s
 4. if s includes vowels then pop from end and add to result
 5. if no vowel then add i of s

 
 */
 var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const vowelsInString = []
    let result = ""

for (let i = 0; i < s.length; i++) {
    if(vowels.includes(s[i].toLowerCase())){
        vowelsInString.push(s[i])
    }
}


    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            result += vowelsInString.pop();
        } else {
            result += s[i];
        }
    }

return result
};