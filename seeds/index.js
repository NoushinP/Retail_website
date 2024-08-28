const sequelize = require('../config/connection');
const { Product, Category, Tag } = require('../models/index')

const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedCategories = require('./category-seeds');

const seedAll = async () => {

  await sequelize.sync({ force: true });
  await Category.bulkCreate(seedCategories);
  await Product.bulkCreate(seedProducts);
  await Tag.bulkCreate(seedTags);
  
  console.log('\n----- Seeds Done -----\n');
  process.exit(0);

};

seedAll();
