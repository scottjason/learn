
# Object Oriented Programming in Javascript

##### Notes from [Udemy's Advanced Javascript Development Course](https://www.udemy.com/refactoru-adv-js) and various other resources.


## What is it?

Object-oriented programming (OOP) is a programming language model organized around objects rather than actions and data rather than logic.

For example, say we have a `vehicle` object such that an instance of `vehicle` has properties like size and color as well as actions like move forward or in reverse.

This then becomes the template out of which we can create different `vehicle` instances that share properties and methods while their values can be different.

---

## Superclasses & Subclasses

A superclass, or base class, is simply a class from which other classes can inherit; they simplify the creation of other classes that can reuse code.

The derived class (the class that is derived from another class) is called a subclass and the class from which it's derived is called the superclass.

---

## Constructor

When an object instance is created from a class, the class's `constructor` function is run to create it.

A constructor is responsible for preparing the object for action and in particular establishing initial values for all its data, i.e. its data members. Although it plays a special role, the constructor is just another member function, and in particular can be passed information via its argument list that can be used to initialise it.

---

## Prototype

When a function is created in JavaScript, the JavaScript engine adds a prototype property to the function. This prototype property is an object (called as prototype object) has a constructor property by default. The constructor property points back to the function on which prototype object is a property. We can access the function’s prototype property using the syntax functionName.prototype. -[**Hacker Noon**](https://hackernoon.com/prototypes-in-javascript-5bba2990e04b)



---

## Vehicle Example

_Note object oriented programming in Javascript is slightly different as the language does not have true classes so instead we use functions- but the ideas are still the same._

**BASE CLASS CONSTRUCTOR**

Here we'll define our vehicle base class constructor:


```javascript
const Vehicle = function() {}

```

And then we'll define an instance of the vehicle and log it, where we'll see an empty prototype object.

```javascript
const car = new Vehicle()
console.log(car)
// Vehicle {}
```

**ADDING PROPERTIES**

Next let's add some properties and methods and assign them as values to the instance of this class, **note the new keyword gives us access to the context of the instance hence the access to the `this` keyword.**

```javascript
const Vehicle = function(size, color) {
  this.size = size
  this.color = color
}
```
This time create the instance and pass in the size and color properties:

```javascript
const car = new Vehicle('large', 'blue')
console.log(car)
// Vehicle { size: 'large', color: 'blue' }
```

**ADDING METHODS**

To add a method we'll add a function onto the prototype, this method will then be definied on all instances of the class.

```javascript
const Vehicle = function(size, color) {
  this.size = size
  this.color = color
}

Vehicle.prototype.updateColor = function(color) {
  this.color = color
}

const car = new Vehicle('large', 'blue')
console.log(car)
// Vehicle { size: 'large', color: 'blue' }

car.updateColor('red')
console.log(car)
// Vehicle { size: 'large', color: 'red' }

```
---


## Inheritance

Inheritance allows us to extend the functionality of the protype which is then "inherited" by the subclass.

**ADDING A SUBCLASS**

Here we add a subclass called Car and we assign both static and dynamic properties:

```javascript
const Car = function(color) {
  this.numWheels = 4
  this.color = color
}
```

To then make Car a subclass of Vehicle we assign the Vehicle class to the Car prototype, also note that although the properties are being assigned in the subclass we have access to the methods defined on the prototpye.

```javascript
Car.prototype = new Vehicle(color)
```
Then create an instance of `Car`:

```javascript
const car = new Car('red')
console.log(car)
// Car { numWheels: 4, color: 'red' }

car.updateColor('green')
console.log(car)
// Car { numWheels: 4, color: 'green' }
```
