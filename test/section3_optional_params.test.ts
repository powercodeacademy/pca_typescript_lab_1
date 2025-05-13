import { expect } from "chai";
import * as student from "../src/section3_optional_params";

describe("Section 3 – Optional Parameters", () => {
  it("should use the default greeting when only name is provided", () => {
    const result = (student as any).greet("Ada");
    expect(result).to.equal("Hello, Ada!");
  });

  it("should use the custom greeting when provided", () => {
    const result = (student as any).greet("Grace", "Welcome");
    expect(result).to.equal("Welcome, Grace!");
  });
});
