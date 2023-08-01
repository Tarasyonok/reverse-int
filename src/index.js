module.exports = function reverse (n) {
    if (n < 0) {
        return (Math.abs(n) + '').split("").reverse().join("");
    }
    return (n + '').split("").reverse().join("");
}
