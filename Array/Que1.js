/*
Question 1: How do you check if an element exists in an array?
*/
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const num = 81;
for(let i = 0; i <= arr.length; i++) {
    if(i == num) {
        console.log("Number exist in array", i)
    } else {
        console.error("Number not exit in array");
    }
}


arr.forEach((i) => {
    if(i == num) {
        console.log("Number exist in array", i)
    } else {
        console.error("Number not exit in array");
    }
})




let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const num1 = 8;
// Using includes method
if (arr1.includes(num1)) {
    console.log("Number exists in array");
} else {
    console.log("Number does not exist in array");
}


console.log("Result:", arr1.indexOf(num))
// Using indexOf method
if (arr1.indexOf(num1) !== -1) {
    console.log("Number exists in array");
} else {
    console.log("Number does not exist in array");
}

// Using some method
if (arr1.some(element => element === num1)) {
    console.log("Number exists in array");
} else {
    console.log("Number does not exist in array");
}