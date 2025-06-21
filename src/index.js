
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

    const sum = nums.reduce(((sum, num) => sum + num), 0);
    return sum;
};

module.exports = add;