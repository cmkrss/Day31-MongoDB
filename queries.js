// 1)Find all the information about each product
db.products.find({});

// 2)Find the product prices which are between 400 and 800
db.products.find({
  product_price: { $gte: 400, $lte: 800 }
});

// 3)Find the product prices which are not between 400 and 600
db.products.find({
  product_price: { $lt: 400, $gt: 600 }
});

// 4)List the four products which are greater than 500 in price
db.products.find({
  product_price: { $gt: 500 }
}).limit(4);

// 5)Find the product name and product material of each product
db.products.find(
  {},
  { product_name: 1, product_material: 1, _id: 0 }
);

// 6)Find the product with an ID of 10
db.products.findOne({ id: "10" });

// 7)Find only the product name and product material
db.products.find(
  {},
  { product_name: 1, product_material: 1, _id: 0 }
);

// 8)Find all products which contain the value "soft" in the product material
db.products.find({
  product_material: /soft/i
});

// 9)Find products which contain the product color "indigo" and product price 492.00
db.products.find({
  product_color: "indigo",
  product_price: 492.00
});

// 10)Delete the products with a product price of 28
db.products.deleteMany({
  product_price: 28
});
