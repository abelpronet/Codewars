/*
Codewars Kata Details:

    - Title: Remove Zeros
    - Difficulty: 4 kyu
    - Link: https://www.codewars.com/kata/52aae14aa7fd03d57400058f
    - Language: Javascript

Description: 

    Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

    [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

    is transformed into

    [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

    Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

    You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.
*/

// Solution

const removeZeros = (array) => {
    let arr1 = array.filter(el => {
        return el === 0 || el === "0"
    })
    let arr2 = array.filter(el => {
        return el !== 0 && el !== "0"
    })
    return [...arr2, ...arr1]
}

removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]) // [ 7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0 ]