const { DataTypes } = require('sequelize');
const database = require('../config/database');

const OrderDetails = database.define ('OrderDetails', {
  OrderID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  UnitPrice: {
    type: DataTypes.DECIMAL(10,4),
    allowNull: false
  },
  Quantity: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  Discount: {
    type: DataTypes.DOUBLE(8,0)
  }
},
{
  timestamps: false
});

module.exports = OrderDetails