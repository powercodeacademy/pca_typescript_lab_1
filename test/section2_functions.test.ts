import { expect } from "chai";
import * as student from "../src/section2_functions";

describe("Section 2 – Functions", () => {
  it("should define a function 'greet' that returns a greeting string", () => {
    const result = (student as any).greet("Ada");
    expect(result).to.equal("Hello, Ada!");
  });

  it("should define a function 'double' that multiplies a number by 2", () => {
    const result = (student as any).double(4);
    expect(result).to.equal(8);
  });

  it("should define a function 'isEven' that returns true for even numbers", () => {
    const result = (student as any).isEven(10);
    expect(result).to.equal(true);
  });

  it("should return false for odd numbers in 'isEven'", () => {
    const result = (student as any).isEven(7);
    expect(result).to.equal(false);
  });
});
