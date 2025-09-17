# TypeScript Lab: Variables & Functions

Welcome to your first TypeScript lab! If you're coming from JavaScript, you're going to love what TypeScript brings to the table. Think of TypeScript as JavaScript with superpowers — it gives you all the flexibility you're used to, plus the safety net of type checking.

## Why TypeScript?

You've been writing JavaScript for a while now, and you know how easy it is to accidentally pass a string where you meant to pass a number, or call a method that doesn't exist. TypeScript catches these mistakes _before_ your code runs, saving you from those frustrating runtime errors.

The best part? TypeScript is just JavaScript with type annotations. Everything you know about JavaScript still applies — we're just adding some helpful guardrails.

## Variables with Types

In JavaScript, you might write:

```javascript
let age = 25
let name = "Ada"
let isStudent = true
```

TypeScript lets you be explicit about what types these variables should hold:

```typescript
let age: number = 25
let name: string = "Ada"
let isStudent: boolean = true
```

Why is this helpful? Well, if you accidentally try to do something like `age = "twenty-five"` later in your code, TypeScript will catch that mistake immediately and tell you "Hey, you said `age` was supposed to be a number!"

### Type Inference: TypeScript's Smart Guessing

Here's something cool — TypeScript is smart enough to figure out types even when you don't explicitly write them:

```typescript
let score = 100 // TypeScript knows this is a number
let message = "Hello!" // TypeScript knows this is a string
```

Try hovering over these variables in your editor — you'll see TypeScript has inferred their types automatically. This is called **type inference**, and it's one of TypeScript's most convenient features.

## Functions with Types

JavaScript functions work great, but they don't tell you much about what they expect or what they return:

```javascript
function double(x) {
  return x * 2
}
```

What if someone passes a string to this function? You'd get `"55"` instead of `10` if they passed `"5"`. TypeScript helps us be clear about our intentions:

```typescript
function double(x: number): number {
  return x * 2
}
```

Now it's crystal clear: this function takes a number and returns a number. If someone tries to pass a string, TypeScript will warn them before the code even runs.

### Optional Parameters: Flexibility When You Need It

Sometimes you want function parameters to be optional. In JavaScript, you might handle this with default values or checking if parameters exist. TypeScript gives you a clean way to express this:

```typescript
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`
  }
  return `Hello, ${name}!`
}
```

The `?` after `greeting` means it's optional. You can call this function with just a name, or with both a name and a custom greeting.

You can also provide default values, which automatically makes parameters optional:

```typescript
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`
}
```

### Union Types: When You Need Flexibility

Sometimes a function should accept multiple types. Maybe you have an ID that could be either a string or a number. TypeScript's union types let you express this:

```typescript
function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase()
  } else {
    return id.toString().padStart(5, "0")
  }
}
```

The `|` means "or" — so `id` can be either a string or a number. Inside the function, we use `typeof` to check which type we actually received and handle each case appropriately. This is called **type narrowing**.

## Your Turn to Practice

Now that you understand the concepts, it's time to put them into practice. You'll be working in the `src/` folder, where you'll find skeleton files for each section:

- `section1_variables.ts` - Practice declaring typed variables
- `section2_functions.ts` - Write functions with typed parameters and return values
- `section3_optional_params.ts` - Work with optional parameters and defaults
- `section4_(bonus)_function_overloads.ts` - Challenge yourself with union types

Each file has minimal instructions — just enough to guide you, but you'll be doing the heavy lifting. This is where you apply what you've learned and build your TypeScript muscle memory.

## Running Your Code

To see if your code works and follows TypeScript best practices:

1. **Install dependencies** (first time only):

   ```bash
   npm install
   ```

2. **Run all tests**:

   ```bash
   npm test
   ```

3. **Run tests for a specific section**:
   ```bash
   npx mocha -r ts-node/register test/section1_variables.test.ts
   ```

The tests will check both that your code works correctly _and_ that you're using proper TypeScript type annotations. Don't worry if you see some failures at first — that's normal! The error messages will guide you toward the solution.

## Troubleshooting Common Issues

**"Cannot find name 'X'"** - You might have a typo in a variable or function name, or you forgot to declare it.

**"Type 'string' is not assignable to type 'number'"** - You're trying to assign the wrong type to a variable. Double-check your type annotations and the values you're assigning.

**"Expected 2 arguments, but got 1"** - You're calling a function with the wrong number of arguments. Check if some parameters should be optional (marked with `?`).

**"Property 'X' does not exist on type 'Y'"** - You're trying to use a method or property that doesn't exist on that type. This often happens when working with union types — you might need to use type narrowing.

## Tips for Success

- **Start simple**: Get the basic functionality working first, then worry about perfect type annotations.
- **Use your editor**: Hover over variables and functions to see what types TypeScript has inferred.
- **Read the error messages**: TypeScript's error messages are usually very helpful and will point you in the right direction.
- **Experiment**: Try passing the wrong types on purpose to see what errors you get — it's a great way to understand how TypeScript works.

## Ready to Start?

Open up `src/section1_variables.ts` and start with the variable declarations. Remember, you're not just learning new syntax — you're building habits that will make your JavaScript code more reliable and easier to debug.

The tests are there to guide you, but don't just make them pass — make sure you understand _why_ your solution works. That understanding will serve you well as you continue your TypeScript journey.

Happy coding! 🚀
