/*
Question 4: Check if a number is palindrome
*/

function isPalindrome(num) {
    let copyNum = num, reverseNum = 0;
    while(copyNum > 0){
        const lastDigit = copyNum % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        copyNum = Math.floor(copyNum / 10);
    }

    return num === reverseNum;
}
console.log(isPalindrome(121)); // true
console.log(isPalindrome(1234)); // false