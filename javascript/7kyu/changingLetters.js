/*
Codewars Kata Details:

    - Title: Changing letters
    - Difficulty: 7 kyu
    - Link: https://www.codewars.com/kata/5831c204a31721e2ae000294
    - Language: Javascript

Description: 

    When provided with a String, capitalize all vowels

For example:

    Input: "Hello World!"

    Output: "HEllO WOrld!"
*/

// Simple solution

function swap(st){
    return st.replace(/[a]/g,"A").replace(/[e]/g,"E").replace(/[i]/g,"I").replace(/[o]/g,"O").replace(/[u]/g,"U")
}

// Refactor solution
  
function swap(st) {
    return st.replace(/[aeiou]/g, function(l) {
      return l.toUpperCase()
    })
}

swap("Hello World") // 'HEllO WOrld'
// swap("The Quick Brown Fox Jumped Over The Lazy Dog") // 'ThE QUIck BrOwn FOx JUmpEd OvEr ThE LAzy DOg'