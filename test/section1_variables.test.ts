import { expect } from "chai";
import * as ts from "typescript";
import { readFileSync } from "fs";
import { join } from "path";
import vm from "vm";

describe("Section 1 - Variables ", () => {
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

  function expectVariable(name: string, type: string) {
    it(`should define a variable named '${name}' of type '${type}'`, () => {
      expect(context).to.have.property(name);
      expect(typeof context[name]).to.equal(type);
    });
  }

  function expectExplicitTypeAnnotation(varName: string, typeName: string) {
    it(`should declare '${varName}' variable with an explicit type annotation of '${typeName}'`, () => {
      const filePath = join(__dirname, "../src/section1_variables.ts");
      const tsCode = readFileSync(filePath, "utf8");
      const sourceFile = ts.createSourceFile(
        filePath,
        tsCode,
        ts.ScriptTarget.Latest,
        true
      );

      let found = false;

      function checkNode(node: ts.Node) {
        if (
          ts.isVariableDeclaration(node) &&
          node.name.getText() === varName &&
          node.type &&
          node.type.getText() === typeName
        ) {
          found = true;
        }
        ts.forEachChild(node, checkNode);
      }

      checkNode(sourceFile);

      expect(
        found,
        `${varName} variable must have an explicit type annotation of '${typeName}'`
      ).to.be.true;
    });
  }

  expectVariable("age", "number");
  expectVariable("firstName", "string");
  expectVariable("isEnrolled", "boolean");

  expectExplicitTypeAnnotation("age", "number");
  expectExplicitTypeAnnotation("firstName", "string");
  expectExplicitTypeAnnotation("isEnrolled", "boolean");
});
