// /*
// How do you access the first and last elements of an array?
// */
// let arr = [1, 2, 3, 4, 5];
// const firstElement = arr[0]; // O(1)
// const arrLength = arr.length;
// const lastElement = arr[arrLength - 1];
// console.log(firstElement, arrLength, lastElement);



// /*
// How do you remove the last element from an array?
// */
// const lastElement1 = arr.pop(); // O(1)
// console.log(arr, lastElement1);


// /*
// How do you add an element to the end of an array?
// */
// const endElement = arr.push(6); // O(1)
// console.log(arr);



// /*
// How do you add an element to the start of an array?
// */
// const startElement = arr.unshift(0); // O(n)
// console.log(arr);


// /*
// How do you remove the first element from an array?
// */
// const firstElement1 = arr.shift(); // O(n)
// console.log(arr, firstElement1);


// /*
// How do you loop through an array in JavaScript?
// */
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i <= arr1.length; i++) {
    console.log(i);
}


// arr1.forEach((ele, i) => {
//     console.log(ele);
// });

arr1.forEach((x, i) => {
    console.log(x);
});

for (let x of arr1){
    console.log(x);
}