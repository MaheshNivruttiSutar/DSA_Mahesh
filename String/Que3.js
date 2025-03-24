/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/
function isAnagram(s, t) {
    // Check if the lengths of the strings are the same
    if (s.length !== t.length) {
        return false;
    }

    // Sort the characters of both strings and compare
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');

    return sortedS === sortedT;
}

// Example usage:
let s1 = "anagram";
let t1 = "nagaram";
console.log(isAnagram(s1, t1)); // Output: true

let s2 = "rat";
let t2 = "car";
console.log(isAnagram(s2, t2)); // Output: false







// Notes: uses of split sort join
/*split Method:
The split method splits a string into an array of substrings based on a specified separator.
In this case, s.split('') splits the string s into an array of individual characters.
*/
let str1 = "anagram";
let arr1 = str1.split('');
console.log(arr1); // Output: ['a', 'n', 'a', 'g', 'r', 'a', 'm']

/*sort Method:
The sort method sorts the elements of an array in place and returns the sorted array.
By default, the sort method sorts the elements as strings in ascending order.*/
let arr2 = ['a', 'n', 'a', 'g', 'r', 'a', 'm'];
arr2.sort();
console.log(arr2); // Output: ['a', 'a', 'a', 'g', 'm', 'n', 'r']

/*join Method:
The join method joins all elements of an array into a single string, with an optional separator.
In this case, arr.join('') joins the array of characters back into a single string without any separators.*/
let arr3 = ['a', 'a', 'a', 'g', 'm', 'n', 'r'];
let str3 = arr3.join('');
console.log(str3); // Output: 'aaagmnr'


/* Remove duplicate characters from an array */
let arr = ['a', 'n', 'a', 'g', 'r', 'a', 'm'];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: ['a', 'n', 'g', 'r', 'm']
