/*
How do you create an empty array in JavaScript?
*/
// const arr = [1, 2, 3, 4, "Hello", {name: "Vishal"}, [1,2,3], 4];

// 1. Using array literal syntax:
let emptyArray = [];
console.log(emptyArray);

// Adding elements using push method
emptyArray.push(1);
emptyArray.push(2, 3);
console.log(emptyArray); // Output: [1, 2, 3]

// Adding elements using unshift method
emptyArray = [];
emptyArray.unshift(1);
emptyArray.unshift(2, 3);
console.log(emptyArray); // Output: [2, 3, 1]

// Adding elements by directly assigning values to indices
emptyArray = [];
emptyArray[0] = 1;
emptyArray[1] = 2;
console.log(emptyArray); // Output: [1, 2]

// Adding elements using concat method
emptyArray = [];
emptyArray = emptyArray.concat(1, 2, 3);
console.log(emptyArray); // Output: [1, 2, 3]

// Using the Array constructor:
const arr2 = new Array();
console.log(arr2);