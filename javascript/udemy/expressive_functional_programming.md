
# Expressive Functional Programming

##### Notes from [Udemy's Advanced Javascript Development Course](https://www.udemy.com/refactoru-adv-js) and various other resources.

## What is it?
Functional programming is a programming paradigm— a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. 

It is a declarative programming paradigm, which means programming is done with expressions or declarations instead of statements. -[**Wikipedia**](https://en.wikipedia.org/wiki/Functional_programming)

[Here's](https://lispcast.com/why-is-functional-programming-more-expressive/) a great video and writeup on the expressiveness of functional programming.


## Statement vs Expressions
An `expression` is a combination of values and functions that are combined and interpreted by the compiler to create a new value, as opposed to a `statement` which is just a standalone unit of execution and doesn't return anything.

Expressions evaluate to at least one value whereas statements simply do something, no return value.

---
## Functional vs Procedural

“Functional programming (FP) is a programming paradigm — a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.” —[**Wikipedia**](https://en.wikipedia.org/wiki/Functional_programming)

“Procedural programming is a programming paradigm, derived from structured programming, based upon the concept of the procedure call. Procedures, also known as routines, subroutines, or functions (not to be confused with mathematical functions, but similar to those used in functional programming), simply contain a series of computational steps to be carried out.” —[**Wikipedia**](https://en.wikipedia.org/wiki/Procedural_programming)

Procedural code is all about executing commands.
Functional code is all about manipulating values.


**Procedural** Uppercase First Letter of Name

```javascript
let names = ['joe', 'bill', 'bob']
for (let i=0; i < names.length; i++) {
 names[i] = names[i][0].toUpperCase() + names[i].slice(1)
}
```
```javascript
console.log(names)
=> ['Joe', 'Bill', 'Bob']
```

The reason you can't `console.log` the whole for loop to get the result is because the for loop is not an expression (there is no return value)

**Functional** Uppercase First Letter of Name

_Note this a pure function because it's taking in a value, modifying this value and returns it while not modifying anthing outside of itself._

```javascript
let names = ['joe', 'bill', 'bob']

const capitalizeNames = (inputNames) => {
  let outputNames = []
  for (let i=0; i < names.length; i++) {
   names[i] = names[i][0].toUpperCase() + names[i].slice(1)
   outputNames.push(names[i])
  }
  return outputNames
}
```
We can now log this method or chain it to other methods since it evalutates to an understood datatype.

```javascript
console.log(capitalizeNames(names).join(', '))
// Joe, Bill, Bob
```

---
## Map & Filter

**Map**

We can go further by using the functional version of a for loop, `map`, and apply a function on each element in the array. We can further abstract and make this more functional while cleaning up the logic.

Here we use map which takes a callback and passes to it the element in iteration.

```javascript
const names = ['joe', 'bill', 'bob']

const capitalizeName = (inputName) => {
  return inputName[0].toUpperCase() + inputName.slice(1)
}

names.map(capitalizeName)
// ['Joe', 'Bill', 'Bob']
```
**Filter**

Filter is similar to map and that it returns an array of what's returned by the callback only with filter you can opt to not return a value (returning nothing in map adds an undefinied for that element in the array). The return values of filter are true or false, when true the item will be returned and added to the new array and when false they'll be ignored.

Remove names that start with `j`:

```javascript
const names = ['joe', 'bill', 'bob']

const removeNames = (name) => { 
  return name[0] !== 'j'
}

names.filter(removeNames)
// ['bill', 'bob']
```

And here we'll use the `capitalizeName` function and chain the `removeNames` function.

```javascript
const names = ['joe', 'bill', 'bob']

const capitalizeName = (inputName) => {
  return inputName[0].toUpperCase() + inputName.slice(1)
}

const removeNames = (name) => { 
  return name[0] !== 'j'
}

names.map(capitalizeName).filter(removeNames)
// ['Bill', 'Bob']
```


