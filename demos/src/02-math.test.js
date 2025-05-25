const { sum, multiply, divide, average } = require("./02-math");

test("add 1 + 3 should be 4", () => {
  const result = sum(1, 3);
  expect(result).toBe(4);
});

test("should be 4", () => {
  const result = multiply(1, 4);
  expect(result).toBe(4);
});

test("should divide", () => {
  const result = divide(6, 3);
  expect(result).toBe(2);
  const result2 = divide(6, "aasknd323");
  expect(result2).toBeNaN();
  const result3 = divide(6, 0);
  expect(result3).toBeNull();
});

test("average of 3, 7, 11", () => {
    const values = [3, 7, 11];
    const result = average(values);
    expect(result).toBe(7)
});

test("average of nothing should be null", () => {
    const values = [];
    const result = average(values);
    expect(result).toBeNull()
});