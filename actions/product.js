const Product = require('../models/Products');

const getProductInfo = async (productID) => {
  let query = {};
  if (productID) {
    if(isNaN(productID)){
      return "Invalid productID";
    }
    query.where = { ProductID: productID };
  }
  const response =  await Product.findAll(query).catch((err) => {throw err});

  if(response.length > 0) {
    return JSON.stringify(response);
  } else {
    return "Sorry no products found";
  }
};



const addProduct = async (data) => {
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
  } = data;

  let createObj = {
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

  const response = await Product.create (createObj).catch(err => {throw err});
  return JSON.stringify(response);
};



const updateProductInfo = async (data) => {
  let { fields, productID } = data;
  const res = await Product.update (
    fields, 
    {
      where: {
        ProductID: productID
    }
  }).catch(err => {throw err});

  if(res[0]){
    const response = await Product.findOne({
      where: {
        ProductID: productID
      }
    }).catch(err => {throw err});
    return JSON.stringify(response);
  } else {
    return "Nothing to update";
  }
};

module.exports = { getProductInfo, updateProductInfo, addProduct };