const chai = require("chai");
const { sayHello, area, circleArea } = require("../utils");
const { Item, Cart } = require("../cart");
const should = chai.should();

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

describe("Level 1:", () => {
  it("should say hello", function() {
    const hello = sayHello();
    hello.should.be.a("string");
    hello.should.equal("Hello");
    hello.should.have.lengthOf(5);
  });
});
// ========================================================
// Level 1 Challenges
// ========================================================

describe("Level 1:", () => {
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
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================
describe("Level 2:", () => {
  it("Should create a new (object) Item with name and price", () => {
    const item = new Item("shoes", 20);
    item.should.not.be.empty;
    item.should.include({
      name: "shoes",
      price: 20
    });
  });

  it("Should return an array containing all items in cart", () => {
    const items = [new Item("shoes", 20), new Item("socks", 5)];
    const cart = new Cart(items);
    const cartItems = cart.getItems();
    cartItems.should.be.a("array");
    cartItems.should.have.lengthOf(2);
  });

  it("Should add a new item to the shopping cart", () => {
    const cart = new Cart();
    cart.addItem(new Item("shoes", 20));
    const cartItems = cart.getItems();
    cartItems.should.be.a("array");
    cartItems.should.have.lengthOf(1);
  });

  it("Should return the number of items in the cart", () => {
    const cart = new Cart([new Item("shoes", 20), new Item("shoes", 20)]);
    const length = cart.length();
    length.should.be.a("number");
    length.should.equal(2);
  });

  it("Should remove items from cart", () => {
    const cart = new Cart([new Item("shoes", 20), new Item("socks", 30)]);
    cart.removeItems("shoes");
    const cartItems = cart.getItems();
    for(var i = 0; i < cartItems.length; i++) {
      cartItems[i].should.not.include({
        name: "shoes",
        price: 20
      });
    }
    cartItems.should.have.lengthOf(1);
  });
});

// ========================================================
// Stretch Challenges
// ========================================================

describe("Stretch:", () => {
  it("Should update the count of items in the cart");

  it("Should remove an item when count is 0");

  it("Should return the total cost of all items in the cart");
});
