/*
How can you check if two arrays are equal or not?
*/

const arraysAreEqual = (arr1, arr2) => {
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Compare each element in the arrays
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // If all elements are equal, return true
    return true;
}

// Example usage:
let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 3, 4];
let array3 = [1, 2, 3, 5];

console.log(arraysAreEqual(array1, array2)); // Output: true
console.log(arraysAreEqual(array1, array3)); // Output: false

