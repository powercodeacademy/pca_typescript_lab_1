import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Section 1 - Variables (No export required)", () => {
  let context: any = {};

  before(() => {
    const filePath = join(__dirname, "../src/section1_variables.ts");
    const tsCode = readFileSync(filePath, "utf8");

    // Compile TypeScript to JavaScript
    const jsCode = ts.transpile(tsCode);

    // Run in a sandbox
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });

  it("should define a variable named 'age' with a number value", () => {
    expect(context.age).to.be.a("number");
  });

  it("should define a variable named 'firstName' with a string value", () => {
    expect(context.firstName).to.be.a("string");
  });

  it("should define a variable named 'isEnrolled' with a boolean value", () => {
    expect(context.isEnrolled).to.be.a("boolean");
  });
});
