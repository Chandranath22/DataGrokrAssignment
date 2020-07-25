const { DataTypes } = require('sequelize');
const database = require('../config/database');

const Orders = database.define ('Orders', {
  OrderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true 
  },
  CustomerID: {
    type: DataTypes.STRING(5)
  },
  EmployeeID: {
    type: DataTypes.INTEGER
  },
  OrderDate: {
    type: DataTypes.DATE
  },
  RequiredDate: {
    type: DataTypes.DATE
  },
  ShippedDate: {
    type: DataTypes.DATE
  },
  ShipVia: {
    type:DataTypes.INTEGER
  },
  Freight: {
    type: DataTypes.DECIMAL(10,4)
  },
  ShipName: {
    type: DataTypes.STRING
  },
  ShipAddress: {
    type: DataTypes.STRING(45)
  },
  ShipCity: {
    type: DataTypes.STRING(15)
  },
  ShipPostalcode: {
    type: DataTypes.STRING(10)
  },
  ShipCountry: {
    type: DataTypes.STRING(15)
  }
},
{
  timestamps: false
});

module.exports = Orders;