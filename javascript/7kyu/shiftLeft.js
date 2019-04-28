/*
Codewars Kata Details:

    - Title: Shift Left
    - Difficulty: 7 kyu
    - Link: https://www.codewars.com/kata/shift-left-1
    - Language: Javascript

Description: 

    You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

For Example:

    By applying a move to the string "where", the result is the string "here".
    By applying a move to the string "a", the result is an empty string "".
    Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.

Notes

    Both strings consist of lowercase latin letters.
    If the string is already empty, you cannot perform any more delete operations.
*/

// Solution

const shiftLeft = (s, t) => {
    let i = s.length,
        j = t.length
    while (i >= 0 && j >= 0 && s[i] == t[j])
        i--, j--;
    return (i + 1) + (j + 1)
}

shiftLeft("test", "west") // 2
// shiftLeft("test", "yes") // 7
// shiftLeft("b", "ab") // 1