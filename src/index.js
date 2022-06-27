module.exports = function reverse (n) {
    let str = n.toString()

    let result = ''

    for (let i = str.length; i >= 0; i--)
    {
        result += str.charAt(i)
    }
    return parseInt(result)
}
