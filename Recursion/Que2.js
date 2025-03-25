/*
Sum of Array
*/

let array = [1, 2, 3, 4];
function sumArray(array, n) {
    // Log the current state of n
    // console.log(`sumArray called with n = ${n}`);

    if (n === 0) {
        // console.log('Base case reached, returning 0');
        return 0;
    }

    // Calculate the sum of the first n elements
    let result = array[n - 1] + sumArray(array, n - 1);
    return result;
}

// Example usage:
let sum = sumArray(array, array.length);
console.log(`Total sum: ${sum}`); // Output: 55