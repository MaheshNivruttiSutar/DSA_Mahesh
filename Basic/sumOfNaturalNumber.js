/*
Questions 1: Som of all natural numbers from 1 to n
*/

//Approach 1
// function sumOfNaturalNumbers(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n + sumOfNaturalNumbers(n - 1);
// }
// let result  = sumOfNaturalNumbers(5); // 15
// console.log(result);


// //Approach 2
// function sumOfNaturalNumbers(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         // sum = sum + i;
//         sum += i;
//     }
//     return sum;
// }
// let sum = sumOfNaturalNumbers(5); //15
// console.log("sum",sum);

////Approach 3
function sumOfNaturalNumbers(num) {
    return num*(num+1)/2;
}
let sum = sumOfNaturalNumbers(5); //15
console.log("sum",sum);