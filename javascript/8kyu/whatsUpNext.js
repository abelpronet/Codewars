/*
Codewars Kata Details:

    - Title: What's up next?
    - Difficulty: 8 kyu
    - Link: https://www.codewars.com/kata/542ebbdb494db239f8000046
    - Language: Javascript

Description: 

    Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

    When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

    nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
    nextItem("testing", "t") # "e"
*/

// Solution

function nextItem(xs, item) {

    let result = undefined
    
    for (let i = 0; i < xs.length; i++) { 
          if (xs[i] === item){
            result = xs[i + 1]
            break
          }
    } 
  
  return result
  
}
  
  
nextItem([1, 2, 3, 4, 5, 6, 7], 3) // 4
// nextItem(countFrom(1), 12)
// nextItem(['a', 'b', 'c'], 'd')