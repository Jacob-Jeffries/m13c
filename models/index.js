// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Products)

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tag'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as:'tag_product'
});

// I am not sure if I need to relate Product_tag to its references ??

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
