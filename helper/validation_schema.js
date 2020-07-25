const Joi = require('@hapi/joi');

const CustomerSchema = Joi.object ({
  customerID: Joi.string().max(5).required(),
  companyName: Joi.string().max(40).required(),
  contactName: Joi.string().max(30),
  contactTitle: Joi.string().max(30),
  address: Joi.string().max(60),
  city: Joi.string().max(15),
  region: Joi.string().max(15),
  postalCode: Joi.string().max(10),
  country: Joi.string().max(10),
  phone: Joi.string().max(24),
  fax: Joi.string().max(24)
});

const ProductSchema = Joi.object ({
  productName: Joi.string().max(40).required(),
  supplierID: Joi.number(),
  categoryID: Joi.number(),
  quantityPerUnit: Joi.string().max(20),
  unitPrice: Joi.number(),
  unitsInStock: Joi.number(),
  unitsOnOrder: Joi.number(),
  reorderLevel: Joi.number(),
  discontinued: Joi.number().required()
});

module.exports = { CustomerSchema, ProductSchema };