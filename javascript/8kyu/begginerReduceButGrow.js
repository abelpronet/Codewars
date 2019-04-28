/*
Codewars Kata Details:

    - Title: Beginner - Reduce but Grow
    - Difficulty: 8 kyu
    - Link: https://www.codewars.com/kata/beginner-reduce-but-grow
    - Language: Javascript

Description: 

    Given a non-empty array of integers, return the result of multiplying the values together in order. 

Example:

    [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

// Solution

const grow = x => x.reduce((acc, cur) => acc * cur)

grow([1, 2, 3]) // 6
// grow([4, 1, 1, 1, 4]) // 16
// grow([2, 2, 2, 2, 2, 2]) // 64

