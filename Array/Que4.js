/*
How to sort an array in ascending and descending order?
*/
// Example array
let array = [5, 3, 8, 1, 2];
// Sorting in ascending order
array.sort((a, b) => a - b);
console.log("Ascending Order:", array); // Output: [1, 2, 3, 5, 8]

// Sorting in descending order
array.sort((a, b) => b - a);
console.log("Descending Order:", array); // Output: [8, 5, 3, 2, 1]

let x = [5, 3, 8, 1, 2];
x.sort(); // O(NlogN)
console.log(x); // Output: [1, 2, 3, 5, 8]

//How to reverse an array?
x.reverse();
console.log(x); // Output: [8, 5, 3, 2, 1]

///Map, Filter & Reduce
/*map Method:
The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
In this example, each element is squared.*/
// Using map to create a new array with squared values
let y = [8, 5, 3, 2, 1];
// const newMapArr = y.map((ele, i) => ele * ele);
const newMapArr = y.map((ele, i) => ele * 2);
console.log(newMapArr); // Output: [64, 25, 9, 4, 1]


/*filter Method:
The filter method creates a new array with all elements that pass the test implemented by the provided function.
In this example, it filters out positive numbers */
// Using filter to create a new array with positive numbers
const positiveNumbers = x.filter((ele, i) => ele > 0);
console.log(positiveNumbers); // Output: [8, 5, 3, 2, 1]

/*reduce Method:
The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
In this example, it calculates the sum of the array elements.
console.log(sumOFArr); outputs the sum of the array elements. */
// Using reduce to calculate the sum of the array elements
const sumOFArr = positiveNumbers.reduce((acc, ele) => acc + ele, 0);
console.log(sumOFArr); // Output: 19

/*flat() Method:
The flat() method creates a new array with all sub-array elements concatenated into
it recursively up to the specified depth. By default, the depth is 1. */
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, [5, 6]]

let deeplyNestedArray = [1, [2, 3], [4, [5, 6]]];
// let fullyFlattenedArray = deeplyNestedArray.flat(2);
let fullyFlattenedArray = deeplyNestedArray.flat(3);
console.log(fullyFlattenedArray); // Output: [1, 2, 3, 4, 5, 6]

/*filter() Method:
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
It returns a new array containing all elements that satisfy the condition.*/
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

/*find() Method:
The find() method returns the value of the first element in the array that satisfies the provided testing function.
If no elements satisfy the testing function, undefined is returned.
*/
let numbers1 = [1, 2, 3, 4, 5];
let firstEvenNumber = numbers1.find(num => num % 2 === 0);
console.log(firstEvenNumber); // Output: 2