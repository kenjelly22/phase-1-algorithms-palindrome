function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split("").reverse("").join("")
  if (word === reversedWord) {
    return true
  } else return false
}

/* 
  Add your pseudocode here

  Reverse the argument of string

  if reversed word matches original word 
    return true
    else if reversed word does not match original word
      return false

/*
  Add written explanation of your solution here.

  Took the argument of string and split into an array of its individual letters. 
  Reversed the letters using .reverse method and returned an array of the 
  individual letters in reverse.
  Rejoined array of reversed letters to return a new string
  Used if/else statement to compare the original 'word' vs the 'reversed' word.
    - If the original and reversed words match returned true.
    - If the original and reversed words do not match returned false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome("rain"))

  console.log("Expecting: true")
  console.log("=>", isPalindrome("racecar"))

  console.log("")

  console.log("Expecting: false")
  console.log("=>", isPalindrome("robot"))
}

module.exports = isPalindrome
