import { expect } from "chai"
import * as ts from "typescript"
import { readFileSync } from "fs"
import { join } from "path"
import vm from "vm"
import {
  expectFunctionReturnTypeAnnotation,
  matchFunctionParameterTypeAnnotation,
} from "chai_typescript_type_annotation_tests"

describe("Section 3 - Optional Parameters", () => {
  let context: any = {}
  const filePath = join(__dirname, "../src/section3_optional_params.ts")

  before(() => {
    const tsCode = readFileSync(filePath, "utf8")

    // Compile TypeScript to JavaScript
    const jsCode = ts.transpile(tsCode)

    // Run in a sandbox
    vm.createContext(context)
    vm.runInContext(jsCode, context)
  })

  // Example: Optional parameters can be done two ways:
  // function greet(name: string, greeting?: string): string { ... }
  // OR
  // function greet(name: string, greeting: string = "Hello"): string { ... }

  describe("greet function", () => {
    it("should use default greeting when only name is provided", () => {
      expect(context).to.have.property("greet")
      expect(context.greet).to.be.a("function")
      const result = context.greet("Ada")
      expect(result).to.equal("Hello, Ada!")
    })

    it("should use custom greeting when provided", () => {
      const result = context.greet("Grace", "Welcome")
      expect(result).to.equal("Welcome, Grace!")
    })

    // These tests ensure proper TypeScript type annotations
    expectFunctionReturnTypeAnnotation(filePath, "greet", "string")
    matchFunctionParameterTypeAnnotation(filePath, "greet", [
      "string",
      "string",
    ])
  })
})
