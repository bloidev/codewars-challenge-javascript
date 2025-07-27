const {duplicateEncode} = require("./main");

describe("Duplicate Encoder Tests", () => {
  test("Basic tests", () => {
    // expect(duplicateEncode("123")).toBe("123");
    expect(duplicateEncode("recede")).toBe("()()()");
    expect(duplicateEncode("Success")).toBe(")())())");
    expect(duplicateEncode("(( @")).toBe("))((");
    expect(duplicateEncode("din")).toBe("(((");
    
  });

  test("Additional tests", () => {
    expect(duplicateEncode("recede")).toBe("()()()");
    expect(duplicateEncode("Success")).toBe(")())())");
    expect(duplicateEncode("(( @")).toBe("))((");
    expect(duplicateEncode("din")).toBe("(((");
    expect(duplicateEncode("recede")).toBe("()()()");
    expect(duplicateEncode("Success")).toBe(")())())");
    expect(duplicateEncode("(( @")).toBe("))((");
  });
});