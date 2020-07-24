const { DataTypes } = require('sequelize');
const database = require('../config/database');

const Products = database.define ('Products', {
  ProductID: {
    type: DataTypes.INTEGER,
		allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  ProductName: {
    type: DataTypes.STRING(40),
		allowNull: false,
  },
  SupplierID: {
    type: DataTypes.INTEGER
  },
  CategoryID: {
    type: DataTypes.INTEGER
  },
  QuantityPerUnit: {
    type: DataTypes.STRING(20)
  },
  UnitPrice: {
    type: DataTypes.DECIMAL(10,4)
  },
  UnitsInStock: {
    type: DataTypes.INTEGER
  },
  UnitsOnOrder: {
    type: DataTypes.INTEGER
  },
  ReorderLevel: {
    type: DataTypes.INTEGER
  },
  Discontinued: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
  timestamps: false
});

module.exports = Products;