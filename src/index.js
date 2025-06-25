
const valueCalculator = (delimtr) => {
    let value;

    return value;
}
const add = (str) => {
    if (!str) return 0;

    let delimiter = /,|\n/;
    let numbers = str;

    if (str.startsWith("//")) {
        const parts = str.split('\n');
        delimiter = parts[0][2];
        numbers = parts[1];
    }

    const nums = numbers.split(delimiter).map(Number);
    const negativeNos = nums.filter(n => n < 0);

    if (negativeNos.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNos.join(', ')}`);
    }

    let val = 0;
    valueCalculator(delimiter, nums);

    if (delimiter == '*') {
        val = nums.reduce(((multi, num) => multi * num), 1);
    } else {
        val = nums.reduce(((sum, num) => sum + num), 0);
    }
    return val;
};

module.exports = add;