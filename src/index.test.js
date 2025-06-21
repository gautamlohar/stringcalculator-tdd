let add = require('./index');

test('should return number 0 when empty string is passed add function', () => {
    expect(add("")).toBe(0);
});