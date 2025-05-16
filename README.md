# Lab 1 — Variables & Functions (TypeScript)

Welcome to Lab 1 of the TypeScript Labs!
This lab focuses on mastering how to use typed variables and typed functions in TypeScript — building directly on your existing JavaScript knowledge.

## 🏆 Learning Goals

By completing this lab, you will be able to:
- Declare variables with explicit types
- Understand how type inference works in TypeScript
- Write functions with typed parameters and return values
- Use optional parameters and default values in functions
- (Bonus) Use union types and type narrowing in functions

## 🛠️ What to Do

### Section 1: Variables

**Task 1:** Declare 3 variables with explicit types:

- a number called `age`
- a string called `firstName`
- a boolean called `isEnrolled`

Then, assign values to each of them.

**BONUS:** Try declaring a variable without an explicit type and see what type is inferred!

### Section 2: Functions

**TASK 1:** Write a function named `double` that:

- takes a number and returns the number \* 2

**TASK 2:** Write a function named `isEven` that:

- takes a number and returns a boolean
- returns true if the number is even, false otherwise

### Section 3: Optional Parameters

**TASK 1**: Write a function named `greet` that:

- takes one required parameter: `name` (string)
- takes one optional parameter: `greeting` (string)
- returns: "<greeting>, <name>!" if greeting is provided
- if not provided, use "Hello" as the default greeting

_Example_:
`greet("Ada") ➞ "Hello, Ada!"`
`greet("Grace", "Welcome") ➞ "Welcome, Grace!"`

### Section 4 (Bonus): Function Overloads

**BONUS TASK**: Write a function called `formatId` that:
- takes a parameter `id` that can be a string OR a number
- if it's a string, return it in uppercase
- if it's a number, return it as a string with leading zeros such that string is 5 characters (e.g. 42 → \"00042\")

*Example*:
`formatId(\"abc\") ➞ \"ABC\"`
`formatId(42) ➞ \"00042\"`

HINT: Use a union type (string | number) and type narrowing with `typeof`

## 🗂️ Lab Structure

```zsh
src/
├── section1_variables.ts
├── section2_functions.ts
├── section3_optional_params.ts
└── bonus_function_overloads.ts

test/
├── section1_variables.test.ts
├── section2_functions.test.ts
├── section3_optional_params.test.ts
└── bonus_function_overloads.test.ts
```

✅ How to Run Tests

1. Install dependencies:

```bash
npm install
```

2. Run all tests:

```zsh
npm test
```

3. Run tests for a specific section:

```zsh
npx mocha -r ts-node/register test/section1_variables.test.ts
```

## ✨ Tips

- Don’t worry if you make mistakes — the compiler and tests will guide you!
- Try assigning wrong types on purpose to see what errors you get (it’s a great learning tool!)
- If you’re stuck, compare what you’re writing to similar JavaScript patterns you already know.
- Tackle the Bonus section if you’re feeling confident or curious.

---

**Ready?** Open src/section1_variables.ts and get started! 🚀
