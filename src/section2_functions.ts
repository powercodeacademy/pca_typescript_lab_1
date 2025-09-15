// TASK 1: Write a function named `double` that:
// - takes a number and returns the number * 2

// TASK 2: Write a function named `isEven` that:
// - takes a number and returns a boolean
// - returns true if the number is even, false otherwise

// Your code here 👇

function double(number: number): number {
  return number * 2;
}

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
