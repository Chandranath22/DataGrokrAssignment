const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// Get customer info from database
router.get ('/', async(req, res) => {
  const Id = req.body.data.productID;
  let response = await getProductInfo(Id);
  res.send(JSON.stringify(response));
});

// Insert new customer into databse
router.post ('/add_product', async (req, res) => {
  console.log(req.body.data);
  const data = req.body.data;
  const response = await addProduct(data);
  res.sendStatus(200);
});

// Update customer info
router.patch ('/update_product_info', async (req, res) => {
  const data = req.body.data;
  const response = await updateProductInfo(data);
  if (response){
    console.log(response);
    res.sendStatus(200);
  }
});






const getProductInfo = async (productID) => {
  let product =  await Product.findOne({
    where: {
      ProductID: productID
    }
  }).catch((err) => console.log(err));
  return product;
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

  const response = await Product.create ({
    ProductName: productName,
    SupplierID: supplierID,
    CategoryID: categoryID,
    QuantityPerUnit: quantityPerUnit,
    UnitPrice: unitPrice,
    UnitsInStock: unitsInStock,
    UnitsOnOrder: unitsOnOrder,
    ReorderLevel: reorderLevel,
    Discontinued: discontinued
  }).catch(err => console.log(err));
  console.log(response);
  return response
};

const updateProductInfo = async (data) => {
  let { fields, productID } = data;
  const response = await Product.update (
    fields, 
    {
      where: {
        ProductID: productID
    }
  });
  return response;
};

module.exports = router;