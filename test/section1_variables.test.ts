import { expect } from "chai";

// Import the variables from student file
import * as student from "../src/section1_variables";

describe("Section 1 – Variables", () => {
  it("should define a variable named 'age' with a number value", () => {
    const age = (student as any).age;
    expect(age).to.be.a("number");
  });

  it("should define a variable named 'firstName' with a string value", () => {
    const firstName = (student as any).firstName;
    expect(firstName).to.be.a("string");
  });

  it("should define a variable named 'isEnrolled' with a boolean value", () => {
    const isEnrolled = (student as any).isEnrolled;
    expect(isEnrolled).to.be.a("boolean");
  });
});
