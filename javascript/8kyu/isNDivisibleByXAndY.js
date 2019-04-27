/*

Codewars Kata 8 kyu

Title:
Is n divisible by x and y?

Description:
Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

*/

// Simple solution

const isDivisible = (n, x, y) => {
  
    let div1 = n / x % 1 == 0
    console.log(div1)
  
    let div2 = n / y % 1 == 0
    console.log(div2)
  
    console.log(n / x % 1 == 0 && n / y % 1 == 0)
    return n / x % 1 == 0 && n / y % 1 == 0
  
  }
  
// Refactor solution
  
// const isDivisible = (n, x, y) => n/x % 1 == 0 && n/y % 1 == 0
  
  
isDivisible(12,2,6) // true