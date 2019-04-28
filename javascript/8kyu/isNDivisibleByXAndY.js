/*
Title: Is n divisible by x and y?

Kata level: 8 kyu

Link: https://www.codewars.com/kata/is-n-divisible-by-x-and-y

Description: Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

Example:
isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
isDivisible(100,5,3)--> false because 100 is not divisible by 3
isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5
*/

// Simple solution

/*
const isDivisible = (n, x, y) => {
  
    let div1 = n / x % 1 == 0
    console.log(div1)
  
    let div2 = n / y % 1 == 0
    console.log(div2)
  
    console.log(n / x % 1 == 0 && n / y % 1 == 0)
    return n / x % 1 == 0 && n / y % 1 == 0
  
  }
*/
  
// Refactor solution
  
const isDivisible = (n, x, y) => n/x % 1 == 0 && n/y % 1 == 0
  
  
isDivisible(12,2,6) // true