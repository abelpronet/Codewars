/*
Codewars Kata Details:

    - Title: Remove First and Last Character
    - Difficulty: 8 kyu
    - Link: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
    - Language: Javascript

Description: 

    It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

// Solution with arrow function

removeChar = (str) => str.slice(1, str.length - 1)

console.log(removeChar('Hello'))

// Solution with return 

function removeChar(str){
 return str.slice(1, str.length - 1)
}

console.log(removeChar('Hello'))

// How to remove first Character

function remove_first_character(element) {
  return element.slice(1)
}

console.log(remove_first_character('Good'))

// How to remove last Character

function remove_last_character(element) {
  return element.slice(0,element.length - 1)
}

console.log(remove_last_character('Good'))