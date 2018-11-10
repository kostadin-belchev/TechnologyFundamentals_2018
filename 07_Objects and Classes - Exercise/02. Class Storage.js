class Storage {
  constructor(capacity) {
    this._capacity = capacity
    this.storage = []
  }

  addProduct(product) {
    this.storage.push(product)
    this._capacity -= product.quantity
  }

  getProducts() {
    return this.storage.map((product) => JSON.stringify(product)).join('\n')
  }

  get totalCost() {
    return this.storage.reduce((acc, currValue) => {
      return acc + currValue.price * currValue.quantity
    }, 0)
  }

  get capacity() {
    return this._capacity
  }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15}
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25}
let productThree = {name: 'Bread', price: 1.10, quantity: 8}
let storage = new Storage(50)
storage.addProduct(productOne)
storage.addProduct(productTwo)
storage.addProduct(productThree)
storage.getProducts()
console.log(storage.capacity)
console.log(storage.totalCost)
// {"name":"Cucamber","price":1.5,"quantity":15}
// {"name":"Tomato","price":0.9,"quantity":25}
// {"name":"Bread","price":1.1,"quantity":8}
// 2
// 53.8
