const Product = require('../models/Products');
const { ProductSchema } = require('../helper/validation_schema');

const getProductInfo = async (productID) => {
  try
  {
    let query = {};
    if (productID) {
      if(isNaN(productID)){
        return "Invalid product ID";
      }
      query.where = { ProductID: productID };
    }
    const response =  await Product.findAll(query);

    if(response.length > 0) {
      return JSON.stringify(response);
    } else {
      return "Sorry no products found";
    }
  } catch (error) {
    return error;
  }
};



const addProduct = async (data) => {
  try
  { 
    const result = await ProductSchema.validateAsync(data);

    let {
      productName,
      supplierID,
      categoryID,
      quantityPerUnit,
      unitPrice,
      unitsInStock,
      unitsOnOrder,
      reorderLevel,
      discontinued
    } = result;

    let productObj = {
      ProductName: productName,
      SupplierID: supplierID,
      CategoryID: categoryID,
      QuantityPerUnit: quantityPerUnit,
      UnitPrice: unitPrice,
      UnitsInStock: unitsInStock,
      UnitsOnOrder: unitsOnOrder,
      ReorderLevel: reorderLevel,
      Discontinued: discontinued
    }

    const response = await Product.create (productObj);
    return JSON.stringify(response);
  } catch (error) {
    if (error.isJoi) {
      return error.message;
    }
    return error;
  }
};



const updateProductInfo = async (data) => {
  try
  {
    let { fields, productID } = data;

    const res = await Product.update (
      fields, 
      {
        where: {
          ProductID: productID
      }
    });

    if(res[0]){
      const response = await Product.findOne({
        where: {
          ProductID: productID
        }
      });
      return JSON.stringify(response);
    } else {
      return "Nothing to update";
    }
  } catch (error) {
    return error;
  }
};

module.exports = { getProductInfo, updateProductInfo, addProduct };