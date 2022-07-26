//Palindrome Checker

/*Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.*/


function palindrome(str) {

  let a=str.replace(/[_\W]+/g, "").split('').join('').toLowerCase();
  let b=str.replace(/[_\W]+/g, "").split('').reverse().join("").toLowerCase(); 

  if (a===b){
    return true
  }
  else {
   return false
  }
}