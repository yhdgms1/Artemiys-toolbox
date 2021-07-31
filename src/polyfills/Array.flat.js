/*
 *   https://tech.geekjob.ru/array-prototype-flat-polyfill/
 */

if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth = 1) {
    depth = isNaN(depth) ? 0 : Math.floor(depth)
    if (depth < 1) return this.slice()
    return [].concat(
      ...(depth < 2
        ? this
        : this.map(v => (Array.isArray(v) ? v.flat(depth - 1) : v)))
    )
  }
}
