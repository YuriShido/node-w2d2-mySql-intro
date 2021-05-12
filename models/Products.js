const db = require('../util/database')

module.exports = class Product{
  constructor(id, title, price, discription, imageUrl){
    this.id = id
    this.title = title
    this.price = price
    this.discription = discription
    this.imageUrl = imageUrl
  }

  save(){
    return db.execute(
      `INSERT INTO products (title, price, discription, imageUrl)
      VALUES (?, ?, ?, ?)`,
      [this.title, this.price, this.discription, this.imageUrl])
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products')
  }

  //alternative way of fetching all
  static fetchAllSync() {
 
  }

  static findById(id){
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id])
  }

  static deleteById(id){
    return db.execute('DELETE FROM products WHERE products.id =?', [id])
  }

}


// let products = [
//     {
//       id: 1,
//       name: "Book",
//       price: "4.00"
//     },
//     {
//       id: 2,
//       name: "Cup Noodles",
//       price: "1.00"
//     },
//     {
//       id: 3,
//       name: "Phone",
//       price: "50.00"
//     },
//   ];
  
//   module.exports = products;