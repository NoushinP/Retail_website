const { Product } = require('../models');

const productData = [
    {
      product_name: 'Stainless Steel Pans',
      price: 100.00,
      stock: 5,
      category_id: 2,
    },
  {
    product_name: 'Crop-top Shirts',
    price: 10.99,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: 'Memory Foam Futon',
    price: 150.00,
    stock: 7,
    category_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
