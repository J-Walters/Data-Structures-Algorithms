/* write a function that takes in a non-empty string
and returns a boolean representing whether the string is a palindrome.

a palindrome is defined as a string that's written forward and backward.
single-character strings are palindromes

------------------
input
string = 'abcdcba'

output
true
*/


// O(n^2) time | O(n) space
function isPalindrome(string) {
	let reversedString = ''
	for (let i = string.length - 1; i >= 0; i--) {
		reversedString += string[i]
	}
	return string === reversedString
}

//O(n) time | O(n) space
function isPalindrome(string, i = 0) {
    const j = string.length - 1 - i
    return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1)
}

//O(n) time | O(1) space
function isPalindrome(string) {
    let leftIdx = 0;
    let rightIdx = string.length - 1
    while(leftIdx < rightIdx) {
        if(string[leftIdx] !== string[rightIdx]) return false
        leftIdx++
        rightIdx--;
    }
}