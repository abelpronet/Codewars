/*
Codewars Kata Details:

    - Title: Sum Mixed Array
    - Difficulty: 8 kyu
    - Link: https://www.codewars.com/kata/57eaeb9578748ff92a000009
    - Language: Javascript

Description: 

    Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

    Return your answer as a number.
*/

// Solution

function sumMix(x){

    let toNumber = x.map(Number);
    
    let sum = toNumber.reduce( (a, b) => { 
      return a + b; 
      }, 0);
  
    return sum
  
  }
  
  sumMix([1,"2",3]) // 6