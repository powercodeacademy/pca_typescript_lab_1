import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Section 4 (Bonus) – Function Overload-like Behavior", () => {
  let context: any = {};

  before(() => {
    const filePath = join(
      __dirname,
      "../src/section4_(bonus)_function_overloads.ts"
    );
    const tsCode = readFileSync(filePath, "utf8");

    // Compile TypeScript to JavaScript
    const jsCode = ts.transpile(tsCode);

    // Run in a sandbox
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });
  it("should return uppercase string when input is a string", () => {
    expect(context).to.have.property("formatId");
    expect(context.formatId).to.be.a("function");
    const result = context.formatId("abc");
    expect(result).to.equal("ABC");
  });

  it("should return a string with leading zeros when input is a number 42", () => {
    const result = context.formatId(42);
    expect(result).to.equal("00042");
  });

  it("should return a string with leading zeros when input is a number 12345", () => {
    const result = context.formatId(12345);
    expect(result).to.equal("12345");
  });

  it("should return a string with leading zeros when input is a number 923", () => {
    const result = context.formatId(923);
    expect(result).to.equal("00923");
  });
});
