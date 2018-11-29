const mocha = require("mocha");
const chai = require("chai");
const { sayHello, area, perimeter, circleArea } = require("../utils");
const should = chai.should();

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = sayHello();
  hello.should.be.a("string");
  hello.should.equal("Hello");
  hello.should.have.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// ========================================================

it("should return the area of a 5 by 6 rectangle", function() {
  const testArea = area(5, 6);
  testArea.should.be.a("number");
  testArea.should.equal(30);
});

it("should return the area of a circle of radius 5", function() {
  const testArea = circleArea(5);
  testArea.should.be.a("number");
  testArea.should.equal(78.53981633974483);
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

it("Should create a new (object) Item with name and price");

it("Should return an array containing all items in cart");

it("Should add a new item to the shopping cart");

it("Should return the number of items in the cart");

it("Should remove items from cart");

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart");

it("Should remove an item when count is 0");

it("Should return the total cost of all items in the cart");
