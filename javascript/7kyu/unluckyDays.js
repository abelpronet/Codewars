/*
Codewars Kata Details:

    - Title: Unlucky Days
    - Difficulty: 7 kyu
    - Link: https://www.codewars.com/kata/unlucky-days
    - Language: Javascript

Description: 

    Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

    Find the number of Friday 13th in the given year.

    Input: Year as an integer.

    Output: Number of Black Fridays in the year as an integer.

Examples:

    unluckyDays(2015) == 3
    unluckyDays(1986) == 1

Note: 

    In Ruby years will start from 1593.
*/

// Solution

function unluckyDays(year){
  
    let count = 0
    
    for (let month = 0; month < 12; month++) {
  
      var day = new Date(year, month, 13)
      if(day.getDay() == 5){
        count++
        }
      }
  
    return count
  
}
  
unluckyDays(1990) // 2

