// TASK 1: Write a function named `greet` that:
// - takes one required parameter: `name` (string)
// - takes one optional parameter: `greeting` (string)
// - returns: "<greeting>, <name>!" if greeting is provided
// - if not provided, use "Hello" as the default greeting

// Example:
// greet("Ada") ➞ "Hello, Ada!"
// greet("Grace", "Welcome") ➞ "Welcome, Grace!"

// Your code here 👇

const greet = (name: string, greeting: string = "Hello"): string =>
  `${greeting}, ${name}!`;
