import { expect } from "chai";
import * as student from "../src/bonus_function_overloads";

describe("Bonus – Function Overload-like Behavior", () => {
  it("should return uppercase string when input is a string", () => {
    const result = (student as any).formatId("abc");
    expect(result).to.equal("ABC");
  });

  it("should return a string with leading zeros when input is a number", () => {
    const result = (student as any).formatId(42);
    expect(result).to.equal("00042");
  });
});
