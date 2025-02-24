/*
Question 6: Missing Number in an Array
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/

function missingNumber(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    const n = nums.length;
    const totalSum = (n * (n + 1)) / 2;
    return totalSum - sum;
}
console.log(missingNumber([3, 0, 1, 5, 2])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));