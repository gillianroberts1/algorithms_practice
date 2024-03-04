/*
// greatest common diviser of string

// euclids algorithm
// The gcd function is defined using an arrow function expression, which takes two parameters: a and b.
It checks if b is equal to 0. If b is 0, it means that a is the greatest common divisor, so it returns a.
If b is not equal to 0, it recursively calls itself with the arguments (b, a % b). This is a common implementation of Euclid's algorithm for finding the greatest common divisor.
In each recursive call, a becomes b and b becomes the remainder of a divided by b (a % b).
In the context of gcdOfStrings, when gcd is invoked, it's invoked with the lengths of str1 and str2 as a and b, respectively:
*/

var gcdOfString = function(str1, str2){
    console.log(str1 + str2)
    console.log(str2 + str1)

    if (str1 + str2 !== str2 + str1)
    return ""

    const gcd = (a,b) => (0 === b ? a : gcd(b, a % b))
    return str1.substring(0, gcd(str1.length, str2.length))

}

/* alternative method
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
var gcdOfStrings = function(str1, str2) {

  if(str1 + str2 !== str2 + str1) return "";
  if(str1 === str2) return str1;
  const len = gcd(str1.length, str2.length);
  return str1.slice(0, len);
};

*/
