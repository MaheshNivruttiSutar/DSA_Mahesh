/*
Find the Index of the First Occurrence in a String
*/
let str = "Hello, welcome to the world of JavaScript!";
let substring = "welcome";
// Using indexOf to find the first occurrence of the substring
let index = str.indexOf(substring);
console.log(`The index of the first occurrence of "${substring}" is: ${index}`); // Output: 7

// Second example
let str1 = "sadbutsad";
let substring1 = "sad";
// Using indexOf to find the first occurrence of the substring
let index1 = str1.indexOf(substring1);
console.log(`The index of the first occurrence of "${substring1}" is: ${index1}`); // Output: 0

// Third example
let str2 = "leetcode";
let substring2 = "leeto";
// Using indexOf to find the first occurrence of the substring
let index2 = str2.indexOf(substring2);
console.log(`The index of the first occurrence of "${substring2}" is: ${index2}`); // Output: -1