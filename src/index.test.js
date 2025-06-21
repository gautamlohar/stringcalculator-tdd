let add = require('./index');

test('should return number 0 when empty string is passed add function', () => {
    expect(add("")).toBe(0);
});

test('should return same number if only one character is passed to add function', () => {
    expect(add("1")).toBe(1);
});

test('should return the sum of two numbers by add function when the input string contains two values separated by a comma', () => {
    expect(add("1,2")).toBe(3);
});