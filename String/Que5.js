/*
Merge Strings Alternately
*/

function mergeAlternately(word1, word2) {
    let mergedString = "";
    let i = 0;
    let j = 0;

    // Loop through both strings until the end of one of them is reached
    while (i < word1.length && j < word2.length) {
        mergedString += word1[i];
        mergedString += word2[j];
        i++;
        j++;
    }

    // Append the remaining characters from word1, if any
    while (i < word1.length) {
        mergedString += word1[i];
        i++;
    }

    // Append the remaining characters from word2, if any
    while (j < word2.length) {
        mergedString += word2[j];
        j++;
    }

    return mergedString;
}

// Example usage:
let word1 = "abc";
let word2 = "pqr";
console.log(mergeAlternately(word1, word2)); // Output: "apbqcr"

let word3 = "ab";
let word4 = "pqrs";
console.log(mergeAlternately(word3, word4)); // Output: "apbqrs"

let word5 = "abcd";
let word6 = "pq";
console.log(mergeAlternately(word5, word6)); // Output: "apbqcd"