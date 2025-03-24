/*
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
*/
const reverseString = (s) => {
    // Initialize two pointers
    let left = 0;
    let right = s.length - 1;

    // Loop until the two pointers meet in the middle
    while (left < right) {
        // Swap the characters at the left and right pointers
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        // Move the pointers towards the center
        left++;
        right--;
    }
};

// Example usage:
let s = ['h', 'e', 'l', 'l', 'o'];
reverseString(s);
console.log(s); // Output: ['o', 'l', 'l', 'e', 'h']

let s1 = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString(s1);
console.log(s1); // Output: ['h', 'a', 'n', 'n', 'a', 'H']