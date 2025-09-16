// BONUS TASK: Write a function called `formatId` that:
// - takes a parameter `id` that can be a string OR a number
// - if it's a string, return it in uppercase
// - if it's a number, return it as a string with leading zeros such that string is 5 characters (e.g. 42 → \"00042\")

// Example:
// formatId(\"abc\") ➞ \"ABC\"
// formatId(42) ➞ \"00042\"

// HINT: Use a union type (string | number) and type narrowing with `typeof`

// Your code here 👇

const formatId = (id: string | number): string =>
  typeof id === "number" ? id.toString().padStart(5, "0") : id.toUpperCase()
