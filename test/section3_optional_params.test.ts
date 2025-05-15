import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Section 3 – Optional Parameters", () => {
  let context: any = {};

  before(() => {
    const filePath = join(__dirname, "../src/section3_optional_params.ts");
    const tsCode = readFileSync(filePath, "utf8");

    // Compile TypeScript to JavaScript
    const jsCode = ts.transpile(tsCode);

    // Run in a sandbox
    vm.createContext(context);
    vm.runInContext(jsCode, context);
  });
  it("should use the default greeting when only name is provided", () => {
    const result = context.greet("Ada");
    expect(result).to.equal("Hello, Ada!");
  });

  it("should use the custom greeting when provided", () => {
    const result = context.greet("Grace", "Welcome");
    expect(result).to.equal("Welcome, Grace!");
  });
});
