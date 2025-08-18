// 1. Implicit Type Casting (Type Coercion)

console.log("5" + 2);    // "52"  (number 2 is coerced to string)
console.log("5" - 2);    // 3     (string "5" is coerced to number)
console.log(true + 1);   // 2     (true is coerced to 1)
console.log(false + 5);  // 5     (false is coerced to 0)
console.log("10" * "2"); // 20    (both strings coerced to numbers)


// But it can sometimes give unexpected results:

console.log("5" + true); // "5true"  (boolean converted to string)
console.log("5" - true); // 4        (true → 1)
console.log("hello" * 2); // NaN     (string cannot be converted)


// 2. Explicit Type Casting

// a) To String

// Methods to convert to string:

// 1. String(value)

// 2. value.toString()

console.log(String(123));     // "123"
console.log(String(true));    // "true"
console.log((123).toString()); // "123"

// b) To Number

// Methods to convert to number:

// 1. Number(value)

// 2. parseInt(value) → converts to integer

// 3. parseFloat(value) → converts to decimal

console.log(Number("123"));     // 123
console.log(Number("12.34"));   // 12.34
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(parseInt("123px")); // 123
console.log(parseFloat("12.34px")); // 12.34

console.log(Number("test"))  // NaN


// c) To Boolean

// Methods:

// 1. Boolean(value)

// 👉 Falsy values in JS (convert to false):

// 0

// "" (empty string)

// null

// undefined

// NaN

// All others are truthy (convert to true).

console.log(Boolean(0));      // false
console.log(Boolean(""));     // false
console.log(Boolean("hello")); // true
console.log(Boolean(123));     // true