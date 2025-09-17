import { expect } from "chai"
import * as ts from "typescript"
import { readFileSync } from "fs"
import { join } from "path"
import vm from "vm"
import {
  expectFunctionReturnTypeAnnotation,
  matchFunctionParameterTypeAnnotation,
} from "chai_typescript_type_annotation_tests"

describe("Section 4 (Bonus) - Union Types & Type Narrowing", () => {
  let context: any = {}
  const filePath = join(
    __dirname,
    "../src/section4_(bonus)_function_overloads.ts"
  )

  before(() => {
    const tsCode = readFileSync(filePath, "utf8")

    // Compile TypeScript to JavaScript
    const jsCode = ts.transpile(tsCode)

    // Run in a sandbox
    vm.createContext(context)
    vm.runInContext(jsCode, context)
  })

  // Example: Union types and type narrowing look like this:
  // function process(input: string | number): string {
  //   if (typeof input === "string") {
  //     return input.toUpperCase();  // TypeScript knows it's a string here
  //   } else {
  //     return input.toString();     // TypeScript knows it's a number here
  //   }
  // }

  describe("formatId function", () => {
    it("should return uppercase string when input is a string", () => {
      expect(context).to.have.property("formatId")
      expect(context.formatId).to.be.a("function")
      const result = context.formatId("abc")
      expect(result).to.equal("ABC")
    })

    it("should return padded string when input is a small number", () => {
      const result = context.formatId(42)
      expect(result).to.equal("00042")
    })

    it("should handle larger numbers correctly", () => {
      const result = context.formatId(12345)
      expect(result).to.equal("12345")
    })

    it("should pad three-digit numbers", () => {
      const result = context.formatId(923)
      expect(result).to.equal("00923")
    })

    // These tests ensure proper TypeScript union type usage
    expectFunctionReturnTypeAnnotation(filePath, "formatId", "string")
    matchFunctionParameterTypeAnnotation(filePath, "formatId", [
      "string | number",
    ])
  })
})
