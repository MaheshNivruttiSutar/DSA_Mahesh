/*
return the length of the last word in the string.
*/



function lengthOfLastWord(s) {
    // Trim the string to remove trailing spaces and split by spaces
    const words = s.trim().split(' ');

    // Return the length of the last word
    return words[words.length - 1].length;
}

// Example usage:
const s = "Hello World";
console.log(lengthOfLastWord(s));  // Output: 5







//Method 2
function lengthOfLastWord(s) {
    let length = 0;
    let i = s.length - 1;

    // Skip trailing spaces
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // Count the characters of the last word
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
}

// Example usage:
const s1 = "Hello World";
console.log(lengthOfLastWord(s1));  // Output: 5

