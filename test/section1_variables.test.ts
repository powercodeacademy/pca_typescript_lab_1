import { expect } from "chai"
import * as ts from "typescript"
import { readFileSync } from "fs"
import { join } from "path"
import vm from "vm"
import { expectVariableExplicitTypeAnnotation } from "chai_typescript_type_annotation_tests"

describe("Section 1 - Variables", () => {
  let context: any = {}
  const filePath = join(__dirname, "../src/section1_variables.ts")

  before(() => {
    const tsCode = readFileSync(filePath, "utf8")

    // Compile TypeScript to JavaScript
    const jsCode = ts.transpile(tsCode)

    // Run in a sandbox
    vm.createContext(context)
    vm.runInContext(jsCode, context)
  })

  // Example: This is what a properly typed variable looks like
  // let score: number = 95;

  function expectVariable(name: string, type: string) {
    it(`should define a variable named '${name}' of type '${type}'`, () => {
      expect(context).to.have.property(name)
      expect(typeof context[name]).to.equal(type)
    })
  }

  expectVariable("age", "number")
  expectVariable("firstName", "string")
  expectVariable("isEnrolled", "boolean")

  // These tests ensure you're using explicit type annotations, not just relying on inference
  expectVariableExplicitTypeAnnotation(filePath, "age", "number")
  expectVariableExplicitTypeAnnotation(filePath, "firstName", "string")
  expectVariableExplicitTypeAnnotation(filePath, "isEnrolled", "boolean")
})
