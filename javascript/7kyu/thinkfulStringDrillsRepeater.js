/*
Codewars Kata Details:

    - Title: Thinkful - String Drills: Repeater
    - Difficulty: 7 kyu
    - Link: https://www.codewars.com/kata/thinkful-string-drills-repeater
    - Language: Javascript

Description: 

    Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

    Return your answer as a number.
*/

// Solution

function repeater(string, n){
    if (n > 0) {
      return string.repeat(n)
    } else {
      return ""
    }
}

repeater("Wub ", 6) // 'Wub Wub Wub Wub Wub Wub '