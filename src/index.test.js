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

test('should return sum of multiple numbers by add function if string contains multiple chars seperated by comma', () => {
    expect(add("3,4,5,6")).toBe(18);
});

test('should return sum of multiple numbers if string contains multiple characters seperated by comma or \n', () => {
    expect(add("1\n2,3")).toBe(6);
});