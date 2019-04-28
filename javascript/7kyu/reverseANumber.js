/*
Codewars Kata Details:

    - Title: Reverse a Number
    - Difficulty: 7 kyu
    - Link: https://www.codewars.com/kata/reverse-a-number
    - Language: Javascript

Description: 

    Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

    Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples:

    123 ->  321
    -456 -> -654
    1000 ->    1
*/

// Simple solution

/*
function reverseNumber(n) {
  
    const reversed = n.toString().split('').reverse().join('')
    
    console.log(n)
    console.log(typeof n)
    
    console.log(reversed)
    console.log(typeof reversed)
  
    console.log(Math.sign(n))
    console.log(typeof Math.sign(n))
    
    return Math.sign(n) * parseInt(reversed)
  
}
*/

// Refactor solution
  
const reverseNumber = n => {
    let reversed = n.toString().split('').reverse().join('')
    return Math.sign(n) * parseInt(reversed)
}

reverseNumber(-100000) // -1
// reverseNumber(-123456) // -654321