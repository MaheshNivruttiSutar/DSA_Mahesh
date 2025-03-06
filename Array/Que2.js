/*
Question 2: How do you find the index of an element in an array?
*/
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 81];
const findElementInex = (arr, num) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === num) {
            return i;
        }
    }
    return -1; // Return -1 if the element is not found after the loop
}
console.log("Result:", findElementInex(arr, "Hallo"))










//NOTE: OUT OF BOUNDS ERROR(i array indices start with 1 in javascript)
let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 81];
// console.log("Length:", arr1.length);
// console.log("Length:", arr1[0]);
const findElementInex1 = (arr1, num) => {
    for(let i = 0; i <= arr1.length; i++) { // This condition can cause an out-of-bounds error
        if(arr1[i] === num) {
            return i;
        }
    }
    return -1; // Return -1 if the element is not found after the loop
}
console.log("Result:", findElementInex(arr1, 81));