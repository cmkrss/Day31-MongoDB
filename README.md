# MongoDB Queries for Products

This repository contains MongoDB queries for various tasks related to products.

## Queries

The `queries.js` file includes the following queries:

1. **Find all the information about each product**
2. **Find the product prices which are between 400 and 800**
3. **Find the product prices which are not between 400 and 600**
4. **List the four products which are greater than 500 in price**
5. **Find the product name and product material of each product**
6. **Find the product with an ID of 10**
7. **Find only the product name and product material**
8. **Find all products which contain the value "soft" in the product material**
9. **Find products which contain the product color "indigo" and product price 492.00**
10. **Delete the products with a product price of 28**

## data:
copied a data into `product.json`

## Running Queries

To run these queries, connect to your MongoDB instance and execute the `queries.js` file.

```bash
mongo < queries.js
