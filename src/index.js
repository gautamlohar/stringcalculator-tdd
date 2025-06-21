const add = (str) => {
    const delimeter = /,|\n/;
    return str.split(delimeter).map(Number).reduce((total, num) => total + num, 0);
}

module.exports = add;