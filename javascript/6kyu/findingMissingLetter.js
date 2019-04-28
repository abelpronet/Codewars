/*
Codewars Kata Details:

    - Title: Find missing letter
    - Difficulty: 6 kyu
    - Link: https://www.codewars.com/kata/5839edaa6754d6fec10000a2
    - Language: Javascript

Description: 

    #Find the missing letter

    Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

    You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
    The array will always contain letters in only one case.

Example:

    ['a','b','c','d','f'] -> 'e'
    ['O','Q','R','S'] -> 'P'
    (Use the English alphabet with 26 letters!)

    Have fun coding it and please don't forget to vote and rank this kata! :-)

    I have also created other katas. Take a look if you enjoyed this kata!
*/

// Solution

var lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
var upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function findMissingLetter(array) {

    var startingIndex = 0
    var alphabet = []

    //test if captial or lowercase:  
    if (lowerCaseAlphabet.includes(array[0])) {
        alphabet = lowerCaseAlphabet;
    } else {
        alphabet = upperCaseAlphabet;
    }

    for (var i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === array[0]) {
            startingIndex = i
        }
        console.log(startingIndex)
    }

    //loop through both arrays, compare sided by side:
    //declare starting index for array = should be 0

    var arrayIndex = 0

    for (var o = startingIndex; o < alphabet.length; o++) {
        console.log(alphabet[o], array[arrayIndex])
        if (alphabet[o] !== array[arrayIndex]) {
            return alphabet[o];
        }
        arrayIndex++
    }
    return ' '
}

findMissingLetter(['O','Q','R','S']) //'P'
// findMissingLetter(['c', 'd', 'f']) //'e'