/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
*/

function isPalindrome(s) {
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    let filteredString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the string is a palindrome by comparing it with its reverse
    return filteredString === filteredString.split('').reverse().join('');
}

// Example usage:
const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));  // Output: true





//Method 2:
function isPalindrome(s) {
    let filteredString = '';

    // Iterate through the string and build the filtered string with alphanumeric characters in lowercase
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            filteredString += char;
        }
    }

    // Check if the filtered string is a palindrome by comparing it with its reverse
    let left = 0;
    let right = filteredString.length - 1;

    while (left < right) {
        if (filteredString[left] !== filteredString[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Example usage:
const s1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s1));  // Output: true

