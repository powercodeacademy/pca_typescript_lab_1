import { expect } from "chai"
import * as ts from "typescript"
import { readFileSync } from "fs"
import { join } from "path"
import vm from "vm"
import {
  expectFunctionReturnTypeAnnotation,
  matchFunctionParameterTypeAnnotation,
} from "chai_typescript_type_annotation_tests"

describe("Section 2 - Functions", () => {
  let context: any = {}
  const filePath = join(__dirname, "../src/section2_functions.ts")

  before(() => {
    const tsCode = readFileSync(filePath, "utf8")

    // Compile TypeScript to JavaScript
    const jsCode = ts.transpile(tsCode)

    // Run in a sandbox
    vm.createContext(context)
    vm.runInContext(jsCode, context)
  })

  // Example: A properly typed function looks like this:
  // function add(a: number, b: number): number {
  //   return a + b;
  // }

  describe("double function", () => {
    it("should multiply a number by 2", () => {
      expect(context).to.have.property("double")
      expect(context.double).to.be.a("function")
      const result = context.double(4)
      expect(result).to.equal(8)
    })

    it("should return a number", () => {
      const result = context.double(4)
      expect(result).to.be.a("number")
    })

    // This test ensures you're using proper TypeScript annotations
    expectFunctionReturnTypeAnnotation(filePath, "double", "number")
    matchFunctionParameterTypeAnnotation(filePath, "double", ["number"])
  })

  describe("isEven function", () => {
    it("should return true for even numbers", () => {
      expect(context).to.have.property("isEven")
      expect(context.isEven).to.be.a("function")
      const result = context.isEven(10)
      expect(result).to.equal(true)
    })

    it("should return false for odd numbers", () => {
      const result = context.isEven(7)
      expect(result).to.equal(false)
    })

    // These tests ensure proper TypeScript type annotations
    expectFunctionReturnTypeAnnotation(filePath, "isEven", "boolean")
    matchFunctionParameterTypeAnnotation(filePath, "isEven", ["number"])
  })
})
