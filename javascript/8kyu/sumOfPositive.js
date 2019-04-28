/*
Codewars Kata Details:

    - Title: Sum of positive
    - Difficulty: 8 kyu
    - Link: https://www.codewars.com/kata/sum-of-positive
    - Language: Javascript

Description: 

    You get an array of numbers, return the sum of all of the positives ones.
    
Example: 

    [1,-4,7,12] => 1 + 7 + 12 = 20

Note: 

    If there is nothing to sum, the sum is default to 0.
*/

// Solution

const positiveSum = arr => arr.filter(num => num > 0).reduce((acc, cur) => acc + cur, 0)

positiveSum([-1,2,3,4,-5]) // 9