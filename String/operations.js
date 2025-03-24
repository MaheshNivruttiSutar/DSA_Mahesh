/*
Length of a String
*/
let firstName = "Vaishali";
console.log(firstName.length);

/*
Access String Element
*/
console.log(firstName.charAt(2));
console.log(firstName[2]);
console.log(firstName.charCodeAt(2));

/*
Check Presence of Character
*/
console.log(firstName.includes("r")); // false (& if present it return true)
console.log(firstName.indexOf("i")); // 2 (& if not present it return -1)
console.log(firstName.lastIndexOf("i")); // 7


/*
Compare Two Strings
*/
let anotherName = "Vishal";
console.log(firstName.localeCompare(anotherName)); // -1 (& if strings are equal it return 0)


/*
Replace Substring
*/
const str = "Vishal is Best Frontend Developer. Vishal is Best Developer. ";
console.log(str.replace("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Vishal is Best Developer. "
console.log(str.replaceAll("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Sujit is Best Developer. "

/*
Substring of a String
*/
console.log(str.substring(6, 30));
console.log(str.slice(-10, -1));

/*
Split and Join
*/
console.log(str.split(""));
const subString = str.split(" ");
console.log(subString.join(" "));

/*
String Start and End
*/
console.log(str.startsWith("Vishal")); // true
console.log(str.endsWith("Developer")); // true

/*
Trim and Case Conversion
*/
const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr, trimStr.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

/*
Convert Number and Object to String
*/
const num = 123;
console.log(num, num.toString());

const obj = {
    name: "Vishal",
    course: "DSA with Vishal"
};
console.log(obj, JSON.stringify(obj));


/*
Concatenate Strings
*/
const lastName = "Rajput";
console.log(firstName + lastName);
console.log(`${firstName} ${lastName} is a Best Developer`);
console.log(firstName.concat(lastName, " is a", " Best"));




/*
toLowerCase() Method:
The toLowerCase() method converts all the characters in a string to lowercase.
It uses the default locale (language and region settings) of the JavaScript environment.
It is straightforward and does not take any parameters.
*/
let str2 = "HELLO WORLD";
console.log(str2.toLowerCase()); // Output: "hello world"


/*
toLocaleLowerCase() Method:
The toLocaleLowerCase() method converts all the characters in a string to lowercase, considering the locale-specific case mappings.
It can take an optional locale parameter to specify the locale to be used for the conversion.
This method is useful for languages where the case conversion rules are locale-specific.
*/
let str3 = "HELLO WORLD";
console.log(str3.toLocaleLowerCase()); // Output: "hello world"

// Using a specific locale (e.g., Turkish)
let turkishStr = "İSTANBUL";
console.log(turkishStr.toLocaleLowerCase('tr-TR')); // Output: "istanbul"