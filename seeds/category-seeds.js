const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Kitchen',
  },
  {
    category_name: 'Clothing',
  },
  {
    category_name: 'Furniture',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
