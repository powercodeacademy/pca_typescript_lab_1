# Lab 1 — Variables & Functions (TypeScript)

Welcome to Lab 1 of the TypeScript Labs!
This lab focuses on mastering how to use typed variables and typed functions in TypeScript — building directly on your existing JavaScript knowledge.

## 🏆 Learning Goals

By completing this lab, you will be able to:
• Declare variables with explicit types
• Understand how type inference works in TypeScript
• Write functions with typed parameters and return values
• Use optional parameters and default values in functions
• (Bonus) Use union types and type narrowing in functions

## 🛠️ What to Do

    •	Open each file inside the src/ folder and complete the tasks
    •	Use the provided Mocha + Chai tests (in the test/ folder) to check your work
    •	Feel free to experiment and try extra variations!

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

✅ How to Run Tests 1. Install dependencies:

```bash
npm install
```

    2.	Run all tests:

```zsh
npm test
```

    3.	Run tests for a specific section:

```zsh
npx mocha -r ts-node/register test/section1_variables.test.ts
```

## ✨ Tips

    •	Don’t worry if you make mistakes — the compiler and tests will guide you!
    •	Try assigning wrong types on purpose to see what errors you get (it’s a great learning tool!)
    •	If you’re stuck, compare what you’re writing to similar JavaScript patterns you already know.
    •	Tackle the Bonus section if you’re feeling confident or curious.

---

**Ready?** Open src/section1_variables.ts and get started! 🚀
