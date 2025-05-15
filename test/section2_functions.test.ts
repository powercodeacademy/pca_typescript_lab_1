import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Section 2 – Functions", () => {
  let context: any = {};

  before(() => {
    const filePath = join(__dirname, "../src/section2_functions.ts");
    const tsCode = readFileSync(filePath, "utf8");

    // Compile TypeScript to JavaScript
    const jsCode = ts.transpile(tsCode);

    // Run in a sandbox
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });
  it("should define a function named 'greet'", () => {
    expect(context).to.have.property("greet");
    expect(context.greet).to.be.a("function");
  });

  it("should define a function 'greet' that returns a greeting string", () => {
    const result = context.greet("Ada");
    expect(result).to.equal("Hello, Ada!");
  });

  it("should define a function named 'double'", () => {
    expect(context).to.have.property("double");
    expect(context.double).to.be.a("function");
  });

  it("should define a function 'double' that multiplies a number by 2", () => {
    const result = context.de(4);
    expect(result).to.equal(8);
    it("should define a function named 'isEven'", () => {
      expect(context).to.have.property("isEven");
      expect(context.isEven).to.be.a("function");
    });

    it("should define a function 'isEven' that returns true for even numbers", () => {
      const result = context.isven(10);
      expect(result).to.equal(true);
    });

    it("should return false for odd numbers in 'isEven'", () => {
      const result = context.isEven(7);
      expect(result).to.equal(false);
    });
  });
});
