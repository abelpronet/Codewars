/*
Codewars Kata Details:

    - Title: Abbreviate a Two Word Name
    - Difficulty: 8 kyu
    - Link: https://www.codewars.com/kata/abbreviate-a-two-word-name
    - Language: Javascript

Description: 

    Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

    The output should be two capital letters with a dot seperating them.

    It should look like this:

    Sam Harris => S.H

    Patrick Feeney => P.F
*/

// Simple solution

/*
const abbrevName = name => {
  let initials = name.split(' ')
  return initials[0].charAt(0).toUpperCase()+'.' + initials[1].charAt(0).toUpperCase()
}
*/

// Refactor solution

const abbrevName = name => name.split(' ').map(x => x[0].toUpperCase()).join('.')

abbrevName('David Mendieta')