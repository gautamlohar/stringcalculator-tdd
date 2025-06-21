
const add = (str) => {
  if (!str) return 0;

  let delimiter = /,|\n/;
  let numbers = str;

  if (str.startsWith("//")) {
    const parts = str.split('\n');
    delimiter = parts[0][2];
    numbers = parts[1];
  }

  return numbers
    .split(delimiter)
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
};

module.exports = add;