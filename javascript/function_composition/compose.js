/* Use compose when the logic runs inside out, ie reduce right to left */
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const arr = [1, 2, 3]
const composed = compose(addOne, sum)(arr)

function addOne(arr) {
  return arr.map(n => n + 1)
}

function sum(arr) {
  return [].concat(arr.reduce((acc, elem) => {
    return acc + elem
  }))
}
