function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split("").reverse("").join("")
  if (word === reversed) {
    return true
  } else return false
}

/* 
  Add your pseudocode here

  Input: String
    - Function takes string as argument.

  Determine if string is a palindrome.
    - .split string into individual letters and return an array
    - reverse array
    - re-join the individual letters to get the original work in reverse
    - Use if/else to compare original word and reversed word

  Output: Boolean
    - Returns True if String is a palindrome
      - if original word === reversed word = true
    - Returns False if String is not a Palindrome
      - if original word !== reversed word = false
*/

/*
  Add written explanation of your solution here.

  Took the argument of string and split into an array of it's individual letters. 
  Reversed the letters in the array.
  Rejoined array of reversed letters to return a string
  Used if/else statement to compare the original 'word' vs the 'reversed' word.
    - If the original and reversed words match = true.
    - If the original and reversed words do not match = false.
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
