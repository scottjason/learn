/* Use pipe when left to right */
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const arr = [1, 2, 3]
const piped = pipe(addOne, sum)(arr)

function addOne(arr) {
  return arr.map(n => n + 1)
}

function sum(arr) {
  return [].concat(arr.reduce((acc, elem) => {
    return acc + elem
  }))
}
