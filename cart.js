// Cart class
class Cart {
  constructor(items) {
    if(Array.isArray(items)) {
      this.items = items;
    } else {
      this.items = [];
    }
  }

  addItem(item) {
    this.items.push(item);
  }

  addItems(items) {
    this.items.concat(items);
  }

  getItems() {
    return this.items;
  }

  // remove items that match specified filter
  removeItems(filter) {
    this.items = this.items.filter(item => 
      item.name != filter &&
      item.price != filter
    );
  }

  length() {
    return this.items.length;
  }
}


// Item class
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

module.exports = { Item, Cart };