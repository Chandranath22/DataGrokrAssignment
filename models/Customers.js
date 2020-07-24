const { DataTypes } = require('sequelize');
const database = require('../config/database');

const Customers = database.define ('customers', {
	CustomerID: {
		type: DataTypes.STRING(5),
		allowNull: false,
		primaryKey: true
	},
	CompanyName: {
		type: DataTypes.STRING(40),
		allowNull: false
	},
	ContactName: {
		type: DataTypes.STRING(30)
	},
	ContactTitle: {
		type: DataTypes.STRING(30)
	},
	Address: {
		type: DataTypes.STRING(60)
	},
	City: {
		type: DataTypes.STRING(15)
	},
	Region: {
		type: DataTypes.STRING(15)
	},
	PostalCode: {
		type: DataTypes.STRING(10)
	},
	Country: {
		type: DataTypes.STRING(15)
	},
	Phone: {
		type: DataTypes.STRING(24)
	},
	Fax: {
		type: DataTypes.STRING(24)
	}
}, 
{
	timestamps: false
});

module.exports = Customers;