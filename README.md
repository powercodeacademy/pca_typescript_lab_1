# TypeScript Lab 1: Variables & Functions

## Learning Objectives

By the end of this lab, you will be able to:

- Declare variables with explicit type annotations in TypeScript
- Understand how TypeScript's type inference works
- Write functions with typed parameters and return values
- Use optional parameters with default values
- Apply union types and type narrowing (bonus)

---

## Introduction

Welcome to your first TypeScript lab! If you're coming from JavaScript, you already know how to work with variables and functions. TypeScript builds on that knowledge by adding **type safety** — helping you catch errors before your code runs and making your intentions clear to other developers.

Think of TypeScript types like labels on containers. In JavaScript, you might have a variable that could hold anything. In TypeScript, you can specify exactly what kind of data that variable should contain, and the compiler will help you stick to that plan.

---

## Getting Started

First, clone this repository to your local machine and install the required dependencies:

```bash
npm install
```

### Verify Your Setup

To make sure everything is working correctly, run the tests:

```bash
npm test
```

You should see test output showing which tests are passing and failing. Don't worry if tests are failing initially - that's expected! You'll be implementing the code to make them pass.

You can also check that TypeScript is working by running:

```bash
npx tsc --noEmit
```

This will check your TypeScript code for errors without generating output files.

---

## Running Your Code

### Run All Tests

```bash
npm test
```

### Run Tests for a Specific Section

```bash
# Section 1
npx mocha -r ts-node/register test/section1_variables.test.ts

# Section 2
npx mocha -r ts-node/register test/section2_functions.test.ts

# Section 3
npx mocha -r ts-node/register test/section3_optional_params.test.ts

# Section 4 (Bonus)
npx mocha -r ts-node/register test/section4_\(bonus\)_function_overloads.test.ts
```

### Compile TypeScript (Check for Errors)

```bash
npx tsc --noEmit
```

---

## Section 1: Variable Type Annotations

In JavaScript, you declare variables like this:

```javascript
let age = 25
let firstName = "Ada"
let isEnrolled = true
```

In TypeScript, you can be explicit about what type of data each variable should hold:

```typescript
let age: number = 25
let firstName: string = "Ada"
let isEnrolled: boolean = true
```

The `: type` syntax is called a **type annotation**. It tells TypeScript (and other developers) exactly what kind of data this variable should contain.

### Why Use Type Annotations?

1. **Catch errors early**: If you try to assign a string to a number variable, TypeScript will warn you
2. **Better IDE support**: Your editor can provide better autocomplete and suggestions
3. **Self-documenting code**: Other developers can see what data types your code expects

### Examples

```typescript
// Explicit type annotations
let studentCount: number = 42
let courseName: string = "TypeScript Fundamentals"
let isComplete: boolean = false
```

TypeScript can also infer types (you don't always need explicit annotations)

```typescript
let inferredNumber = 100 // TypeScript knows this is a number
let inferredString = "Hello" // TypeScript knows this is a string
let inferredBoolean = true // TypeScript knows this is a boolean
```

### Practice: Variable Declarations

**Your Task**: Open `src/section1_variables.ts` and complete the following:

1. Declare a variable called `age` with an explicit `number` type and assign it your age
2. Declare a variable called `firstName` with an explicit `string` type and assign it your first name
3. Declare a variable called `isEnrolled` with an explicit `boolean` type and set it to `true`

**Bonus Challenge**: Try declaring a variable without an explicit type annotation and see what type TypeScript infers. You can hover over the variable in your editor to see the inferred type!

### Common Mistakes & Troubleshooting

- **Forgetting the colon**: Write `let age: number` not `let age number`
- **Wrong type assignment**: If you declare `let age: number` but assign `"25"` (a string), TypeScript will show an error
- **Case sensitivity**: Use lowercase `number`, `string`, `boolean` — not `Number`, `String`, `Boolean`

---

## Section 2: Function Type Annotations

Functions in TypeScript work just like JavaScript functions, but you can specify types for parameters and return values:

```typescript
// JavaScript function
function add(a, b) {
  return a + b
}

// TypeScript function with type annotations
function add(a: number, b: number): number {
  return a + b
}
```

The syntax is:

- **Parameter types**: `(paramName: type)`
- **Return type**: `: type` after the parameter list

### Why Type Functions?

1. **Prevent mistakes**: Can't accidentally pass a string where a number is expected
2. **Clear contracts**: Other developers know exactly what your function expects and returns
3. **Better tooling**: IDEs can catch errors and provide better autocomplete

### Examples

```typescript
// Function that takes a string and returns a string
function greetUser(name: string): string {
  return `Hello, ${name}!`
}

// Function that takes a number and returns a boolean
function isPositive(num: number): boolean {
  return num > 0
}

// Function that takes two numbers and returns a number
function multiply(x: number, y: number): number {
  return x * y
}
```

### Practice: Basic Functions

**Your Task**: Open `src/section2_functions.ts` and implement:

1. **Function `double`**:

   - Takes one parameter: `num` (number)
   - Returns: the number multiplied by 2
   - Return type should be `number`

2. **Function `isEven`**:
   - Takes one parameter: `num` (number)
   - Returns: `true` if the number is even, `false` if odd
   - Return type should be `boolean`
   - _Hint_: Use the modulo operator `%` to check if a number is even

### Testing Your Functions

You can test your functions by calling them:

```typescript
console.log(double(5)) // Should output: 10
console.log(isEven(4)) // Should output: true
console.log(isEven(7)) // Should output: false
```

---

## Section 3: Optional Parameters

Sometimes you want a function parameter to be optional. In JavaScript, you might handle this with default values or by checking if a parameter exists. TypeScript gives you a clean way to mark parameters as optional using the `?` symbol:

```typescript
// Optional parameter with ?
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`
  }
  return `Hello, ${name}!`
}
```

You can also provide default values:

```typescript
// Default parameter value
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`
}
```

### Examples

```typescript
// Optional parameter
function createUser(name: string, age?: number): string {
  if (age) {
    return `User: ${name}, Age: ${age}`
  }
  return `User: ${name}`
}

// Default parameter
function formatMessage(text: string, prefix: string = "INFO"): string {
  return `[${prefix}] ${text}`
}

// Usage examples
createUser("Alice") // "User: Alice"
createUser("Bob", 25) // "User: Bob, Age: 25"
formatMessage("System ready") // "[INFO] System ready"
formatMessage("Error occurred", "ERROR") // "[ERROR] Error occurred"
```

### Practice: Optional Parameters

**Your Task**: Open `src/section3_optional_params.ts` and implement:

**Function `greet`**:

- Takes a required parameter: `name` (string)
- Takes an optional parameter: `greeting` (string)
- Returns a string in the format: `"<greeting>, <name>!"`
- If no greeting is provided, use `"Hello"` as the default
- Return type should be `string`

**Expected behavior**:

```typescript
greet("Ada") // Returns: "Hello, Ada!"
greet("Grace", "Welcome") // Returns: "Welcome, Grace!"
```

### Two Approaches

You can solve this using either approach:

**Approach 1 - Optional parameter with conditional logic**:

```typescript
function greet(name: string, greeting?: string): string {
  // Your implementation here
}
```

**Approach 2 - Default parameter**:

```typescript
function greet(name: string, greeting: string = "Hello"): string {
  // Your implementation here
}
```

---

## Section 4 (Bonus): Union Types & Type Narrowing

Sometimes a function needs to handle multiple types of input. TypeScript's **union types** let you specify that a parameter can be one of several types using the `|` symbol:

```typescript
function processId(id: string | number): string {
  // This function can accept either a string OR a number
}
```

When you have a union type, you need **type narrowing** to safely work with the value. The most common way is using `typeof`:

```typescript
function processId(id: string | number): string {
  if (typeof id === "string") {
    // TypeScript knows id is a string here
    return id.toUpperCase()
  } else {
    // TypeScript knows id is a number here
    return id.toString()
  }
}
```

### Examples

```typescript
// Union type parameter
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toLowerCase()
  } else {
    return `Number: ${value}`
  }
}

// Another example
function getLength(input: string | number[]): number {
  if (typeof input === "string") {
    return input.length // string length
  } else {
    return input.length // array length
  }
}
```

### Practice: Union Types (Bonus Challenge)

**Your Task**: Open `src/section4_(bonus)_function_overloads.ts` and implement:

**Function `formatId`**:

- Takes a parameter `id` that can be either `string` or `number` (union type)
- If `id` is a string: return it converted to uppercase
- If `id` is a number: return it as a string with leading zeros (5 characters total)
- Return type should be `string`

**Expected behavior**:

```typescript
formatId("abc") // Returns: "ABC"
formatId(42) // Returns: "00042"
formatId(12345) // Returns: "12345"
formatId(7) // Returns: "00007"
```

**Hints**:

- Use `typeof id === "string"` to check if it's a string
- Use `typeof id === "number"` to check if it's a number
- For padding numbers with zeros, you can use: `id.toString().padStart(5, "0")`

Now it's crystal clear: this function takes a number and returns a number. If someone tries to pass a string, TypeScript will warn them before the code even runs.

## Tips for Success

### Learning Strategies

1. **Start simple**: Focus on getting the basic syntax right before worrying about complex logic
2. **Read error messages**: TypeScript error messages are usually very helpful — they tell you exactly what's wrong
3. **Use your IDE**: Hover over variables and functions to see their types
4. **Experiment**: Try breaking things on purpose to see what errors you get

### Common TypeScript Patterns

- **Be explicit when learning**: Even though TypeScript can infer types, practice writing explicit annotations while you're learning
- **Read the compiler**: If TypeScript complains, there's usually a good reason
- **Think about data flow**: What types go in, what types come out?

### Debugging TypeScript Errors

- **"Type 'X' is not assignable to type 'Y'"**: You're trying to put the wrong type of data somewhere
- **"Parameter 'X' implicitly has an 'any' type"**: You forgot to add a type annotation
- **"Cannot find name 'X'"**: You might have a typo in a variable or function name

---

## What's Next?

After completing this lab, you'll have a solid foundation in:

- ✅ TypeScript variable declarations with explicit types
- ✅ Function parameter and return type annotations
- ✅ Optional parameters and default values
- ✅ Union types and type narrowing (bonus)

In the next lab, you'll learn about:

- Objects and interfaces
- Arrays and tuples
- Custom types and type aliases
- Generic functions

---

**Ready to start?** Follow the setup instructions in the "Getting Started" section above, then open `src/section1_variables.ts` and begin with Section 1! 🚀
