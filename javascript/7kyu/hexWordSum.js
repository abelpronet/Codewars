/*
Codewars Kata Details:

    - Title: Hex Word Sum
    - Difficulty: 7 kyu
    - Link: https://www.codewars.com/kata/5c46ea433dd41b19af1ca3b3
    - Language: Javascript

Description: 

    Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

    Return your answer as a number.
*/

// Solution

function hexWordSum(hex) {

    hex = hex.replace(/O/g, "0")
    hex = hex.replace(/S/g, "5")
  
    let filterHex = hex.split(' ').map(e => {
        
    if (!/[G-Z]/.test(e)) {
      return parseInt(e, 16)
      } else {
       return 0
      }
    })
  
    if ( (filterHex.length === 0) || (isNaN(filterHex[0])) ) {
      return 0
    } else {
      return filterHex.reduce( (e, acc) => {
        return e + acc
      })
    }
  
}

hexWordSum('DEFACE') // 14613198
// hexWordSum('DO YOU SEE THAT BEE DRINKING DECAF COFFEE') // 13565769