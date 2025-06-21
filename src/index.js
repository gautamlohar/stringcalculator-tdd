const add = (str) => {
    return str.split(',').map(Number).reduce((total, num) => total + num, 0);
}

module.exports = add;