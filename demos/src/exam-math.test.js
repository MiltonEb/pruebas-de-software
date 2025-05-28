const { subtract, isEven } = require('./exam-math');

test('subtract(10, 3) should return 7', () => {
  expect(subtract(10, 3)).toBe(7);
});

test('subtract(3, 10) should return -7', () => {
  expect(subtract(3, 10)).toBe(-7);
});



test('isEven(4) should return true', () => {
  expect(isEven(4)).toBe(true);
});

test('isEven(5) should return false', () => {
  expect(isEven(5)).toBe(false);
});

test('isEven(0) should return true', () => {
  expect(isEven(0)).toBe(true);
});
