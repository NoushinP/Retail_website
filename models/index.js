const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});


Category.hasMany(Product, {
  foreignKey: 'category_id',
});


Product.belongsToMany(Tag, {
  through: Product,
  foreignKey: 'product_id',
});

module.exports = {
  Product,
  Category,
  Tag,
};