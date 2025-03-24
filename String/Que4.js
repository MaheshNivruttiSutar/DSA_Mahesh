/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    // Initialize the prefix as the first string in the array
    let prefix = strs[0];
    // Iterate through the rest of the strings in the array
    for (let i = 1; i < strs.length; i++) {
        // Update the prefix by comparing it with each string
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

// Example usage:
let strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1)); // Output: "fl"

let strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2)); // Output: ""