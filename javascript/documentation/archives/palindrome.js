const checkPalindrome = (word) => {

  let indexFromLeft = 0,
    indexFromRight = word.length - 1;

  while (indexFromLeft !== indexFromRight && indexFromRight > indexFromLeft) {
    if (
      word[indexFromLeft].toUpperCase() !== word[indexFromRight].toUpperCase()
    ) {
      return false;
    }
    indexFromLeft++;
    indexFromRight--;
  }
  return true;
};

let isPalindrome = checkPalindrome("Hung");
console.log("Hung", isPalindrome); // ---> false

isPalindrome = checkPalindrome("HANNAH");
console.log("HANNAH", isPalindrome); // ---> true

isPalindrome = checkPalindrome("dad");
console.log("dad", isPalindrome); // ---> true

isPalindrome = checkPalindrome("eme");
console.log("eme", isPalindrome); // ---> true