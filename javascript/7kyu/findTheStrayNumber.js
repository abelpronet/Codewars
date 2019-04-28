/*
Codewars Kata Details:

    - Title: Find the stray number
    - Difficulty: 7 kyu
    - Link: https://www.codewars.com/kata/find-the-stray-number
    - Language: Javascript

Description: 

    You are given an odd-length array of integers, in which all of them are the same, except for one single number.

    Complete the method which accepts such an array, and returns that single different number.

    The input array will always be valid! (odd-length >= 3)

Examples:

    [1, 1, 2] ==> 2
    [17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// Solution

function stray(numbers) {
    for (let i = 0; i < numbers.length; i++){
      if (numbers[0] !== numbers[1] && numbers[i] !== numbers[2]) {
        return numbers[0]
      }
      if (numbers[i] !== numbers[i+1]){
        return numbers[i+1]
      }
    }
}
  
stray([1,1,1,1,0]) // 0