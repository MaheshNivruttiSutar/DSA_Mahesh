/*
Question 3: Count the number of digits of a number
*/

// // Solution 1
// function countDigits(num) {
//     num = Math.abs(num);
//     return num.toString().length;
// }
// console.log(countDigits(-123454)); // 6


// // Solution 2
// function countDigits(num) {
//     num = Math.abs(num);
//     let count = 0;
//     while (num > 0) {
//         num = Math.floor(num / 10);
//         count++;
//     }
//     return count;
// }
// console.log(countDigits(-123454)); // 6

// Solution 3
function countDigits(num) {
    num = Math.abs(num);
    let count = 0;
    do {
        count ++;
        num = Math.floor(num / 10);
    } while (num > 0);
    return count;
}
console.log(countDigits(-123454)); // 6