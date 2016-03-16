//For homework we will be creating a function that checks specific words for palindromes.

//Your job is to create a function that will accept one argument (the word) and check if it is a palindrome (same forwards and backwards).



//Push your code to GitHub.

function palChecker(pallendromeCandidate) {
//split the string into an array, reverse the array, and then merge the elements back into one. The quote marks in join keeps from separating the array with commas
  var pallendromeCandidateOpposite = pallendromeCandidate.split().reverse().join("");
  console.log(pallendromeCandidateOpposite);

//looking at the word forwards and backwards, and with teh same case, determine if both are the same
  if(pallendromeCandidate.toUpperCase() === pallendromeCandidateOpposite.toUpperCase()){
  	return true;
  } else {
  	return false;
  }
}

console.log(palChecker("kristin"));
